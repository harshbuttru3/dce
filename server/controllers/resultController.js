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

// Search Results (Optimized for Performance)
exports.getResults = async (req, res) => {
    try {
        const { query, registrationNo, name, semester, branch, batch } = req.query;
        
        let filter = {};
        let sort = { createdAt: -1 }; // Default sort
        
        if (registrationNo) {
            // Optimization: Prefix matching (^...) utilizes the B-Tree index on registrationNo
            filter.registrationNo = { $regex: `^${registrationNo}`, $options: 'i' };
        } else if (name) {
            // Optimization: Utilize the newly created Text Index for blazingly fast name lookups
            filter.$text = { $search: name };
            sort = { score: { $meta: "textScore" } }; // Sort by relevance
        } else if (query) {
            // Smart routing: if it starts with a number, assume RegistrationNo, otherwise assume Name
            if (/^\d+/.test(query)) {
                 filter.registrationNo = { $regex: `^${query}`, $options: 'i' };
            } else {
                 filter.$text = { $search: query };
                 sort = { score: { $meta: "textScore" } };
            }
        }

        if (semester) filter.semester = semester;
        if (branch) filter.branch = branch;
        if (batch) filter.batch = batch;

        // Build the Mongoose query
        let resultsQuery = Result.find(filter);
        
        // If text search is used, project the score so we can sort by it
        if (filter.$text) {
             resultsQuery = resultsQuery.select({ score: { $meta: "textScore" } });
        }
        
        // Optimization: Limit to 100 results to prevent massive payloads on broad searches
        const results = await resultsQuery.sort(sort).limit(100);
        
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

