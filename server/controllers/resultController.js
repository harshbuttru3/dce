const Result = require('../models/Result');
const csv = require('csv-parser');
const fs = require('fs');

// Upload Results via CSV
exports.uploadResults = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "Please upload a CSV file." });
        }

        const results = [];
        const filePath = req.file.path;

        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => {
                // Map CSV columns to model fields
                // Expected CSV Header: registrationNo, rollNo, name, semester, branch, sgpa, cgpa, status
                results.push({
                    registrationNo: data.registrationNo?.trim(),
                    rollNo: data.rollNo?.trim(),
                    name: data.name?.trim(),
                    semester: data.semester?.trim(),
                    branch: data.branch?.trim(),
                    sgpa: parseFloat(data.sgpa) || 0,
                    cgpa: parseFloat(data.cgpa) || 0,
                    status: data.status?.trim() || 'Pass'
                });
            })
            .on('end', async () => {
                try {
                    // Bulk upsert logic to avoid duplicates
                    const ops = results.map(result => ({
                        updateOne: {
                            filter: { registrationNo: result.registrationNo },
                            update: { $set: result },
                            upsert: true
                        }
                    }));

                    await Result.bulkWrite(ops);
                    
                    // Cleanup uploaded file
                    fs.unlinkSync(filePath);
                    
                    res.status(200).json({ 
                        message: `Successfully processed ${results.length} results.`,
                        count: results.length 
                    });
                } catch (error) {
                    res.status(500).json({ message: "Error saving to database", error: error.message });
                }
            });

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Search Results
exports.getResults = async (req, res) => {
    try {
        const { query, semester, branch } = req.query;
        
        let filter = {};
        
        if (query) {
            filter.$or = [
                { registrationNo: { $regex: query, $options: 'i' } },
                { name: { $regex: query, $options: 'i' } }
            ];
        }

        if (semester) filter.semester = semester;
        if (branch) filter.branch = branch;

        const results = await Result.find(filter).sort({ name: 1 });
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ message: "Error fetching results", error: error.message });
    }
};
