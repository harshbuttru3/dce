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
                console.log("Parsed row:", data);
                // Map CSV columns to model fields
                // Expected CSV Header: registrationNo, rollNo, name, semester, branch, sgpa, cgpa, status
                results.push({
                    registrationNo: (data.registrationNo || data.RegistrationNo || data["Registration No"])?.trim(),
                    rollNo: (data.rollNo || data.RollNo || data["Roll No"])?.trim(),
                    name: (data.name || data.Name)?.trim(),
                    semester: (data.semester || data.Semester)?.trim(),
                    branch: (data.branch || data.Branch)?.trim(),
                    sgpa: parseFloat(data.sgpa || data.SGPA) || 0,
                    cgpa: parseFloat(data.cgpa || data.CGPA) || 0,
                    status: (data.status || data.Status)?.trim() || 'Pass'
                });
            })
            .on('end', async () => {
                console.log(`Finished parsing CSV. Total rows: ${results.length}`);
                try {
                    if (results.length === 0) {
                        return res.status(400).json({ message: "CSV file is empty or formatted incorrectly." });
                    }
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

        const results = await Result.find(filter).sort({ createdAt: -1 });
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ message: "Error fetching results", error: error.message });
    }
};

// Add Single Result
exports.addResult = async (req, res) => {
    try {
        const { registrationNo, rollNo, name, semester, branch, sgpa, cgpa, status } = req.body;
        
        const existing = await Result.findOne({ registrationNo });
        if (existing) {
            return res.status(400).json({ message: "Student with this Registration No already exists." });
        }

        const result = new Result({
            registrationNo, rollNo, name, semester, branch, 
            sgpa: parseFloat(sgpa) || 0, 
            cgpa: parseFloat(cgpa) || 0, 
            status: status || 'Pass'
        });

        await result.save();
        res.status(201).json({ message: "Result added successfully", result });
    } catch (error) {
        res.status(500).json({ message: "Error adding result", error: error.message });
    }
};

// Update Result
exports.updateResult = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const updated = await Result.findByIdAndUpdate(id, updateData, { new: true });
        if (!updated) {
            return res.status(404).json({ message: "Result not found" });
        }

        res.status(200).json({ message: "Result updated successfully", result: updated });
    } catch (error) {
        res.status(500).json({ message: "Error updating result", error: error.message });
    }
};

// Delete Result
exports.deleteResult = async (req, res) => {
    try {
        const { id } = req.params;
        await Result.findByIdAndDelete(id);
        res.status(200).json({ message: "Result deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting result", error: error.message });
    }
};

