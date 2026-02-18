const Notice = require('../models/Notice');
const { cloudinary } = require('../config/cloudinary');

// Get all notices
exports.getNotices = async (req, res) => {
    try {
        const notices = await Notice.find().sort({ createdAt: -1 });
        res.json(notices);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new notice with file upload
exports.createNotice = async (req, res) => {
    try {
        const { title, description, date } = req.body;
        console.log('Request Body:', req.body);
        console.log('Request File:', req.file);

        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const newNotice = new Notice({
            title,
            description,
            date,
            fileUrl: req.file.path,
            fileType: req.file.mimetype,
            publicId: req.file.filename // Cloudinary public_id
        });

        const savedNotice = await newNotice.save();
        res.status(201).json(savedNotice);
    } catch (error) {
        console.error('Error creating notice:', error);
        // If save fails, we should delete the file from Cloudinary (optional cleanup)
        if (req.file && req.file.filename) {
            // Try to delete, guessing resource type if possible, or just skip
            await cloudinary.uploader.destroy(req.file.filename);
        }
        res.status(500).json({ message: error.message });
    }
};

// Delete a notice
exports.deleteNotice = async (req, res) => {
    try {
        const notice = await Notice.findById(req.params.id);
        if (!notice) {
            return res.status(404).json({ message: 'Notice not found' });
        }

        // Delete file from Cloudinary
        if (notice.publicId) {
            // Determine resource type based on file type
            const resourceType = notice.fileType === 'application/pdf' ? 'raw' : 'image';
            try {
                await cloudinary.uploader.destroy(notice.publicId, { resource_type: resourceType });
            } catch (err) {
                console.error("Cloudinary delete error:", err);
            }
        }

        await notice.deleteOne();
        res.json({ message: 'Notice deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
