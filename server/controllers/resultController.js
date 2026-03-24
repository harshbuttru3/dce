const Result = require('../models/Result');
const csv = require('csv-parser');
const fs = require('fs');

// Bulk Save Results (from Spreadsheet Grid)
exports.bulkSaveResults = async (req, res) => {
    try {
        const { results } = req.body;
        
        if (!results || !Array.isArray(results) || results.length === 0) {
            return res.status(400).json({ message: "No result data provided." });
        }

        // Bulk upsert logic
        const ops = results.map(result => ({
            updateOne: {
                filter: { registrationNo: result.registrationNo },
                update: { $set: result },
                upsert: true
            }
        }));

        await Result.bulkWrite(ops);
        
        res.status(200).json({ 
            message: `Successfully processed ${results.length} results.`,
            count: results.length 
        });
    } catch (error) {
        res.status(500).json({ message: "Error saving results", error: error.message });
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

