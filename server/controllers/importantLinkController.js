const ImportantLink = require('../models/ImportantLink');

// @desc    Get all important links
// @route   GET /api/important-links
// @access  Public
exports.getImportantLinks = async (req, res) => {
    try {
        const links = await ImportantLink.find().sort({ createdAt: -1 });
        res.json(links);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a new important link
// @route   POST /api/important-links
// @access  Private (Admin)
exports.createImportantLink = async (req, res) => {
    try {
        const { title, url, date } = req.body;

        if (!title || !url) {
            return res.status(400).json({ message: 'Title and URL are required' });
        }

        const newLink = new ImportantLink({
            title,
            url,
            date: date || Date.now()
        });

        const savedLink = await newLink.save();
        res.status(201).json(savedLink);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete an important link
// @route   DELETE /api/important-links/:id
// @access  Private (Admin)
exports.deleteImportantLink = async (req, res) => {
    try {
        await ImportantLink.findByIdAndDelete(req.params.id);
        res.json({ message: 'Link deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
