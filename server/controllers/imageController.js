const Image = require('../models/Image');
const { cloudinary } = require('../config/cloudinary');

// @desc    Get all images
// @route   GET /api/images
// @access  Public
exports.getImages = async (req, res) => {
    try {
        const images = await Image.find().sort({ createdAt: -1 });
        res.json(images);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Upload an image
// @route   POST /api/images
// @access  Private (Admin)
exports.uploadImage = async (req, res) => {
    try {
        const { title } = req.body;

        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        // Cloudinary storage middleware already handles the upload
        const newImage = new Image({
            title,
            imageUrl: req.file.path,
            publicId: req.file.filename
        });

        const savedImage = await newImage.save();
        res.status(201).json(savedImage);
    } catch (error) {
        console.error('Error uploading image:', error);
        // Cleanup if DB save fails
        if (req.file && req.file.filename) {
            await cloudinary.uploader.destroy(req.file.filename);
        }
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete an image
// @route   DELETE /api/images/:id
// @access  Private (Admin)
exports.deleteImage = async (req, res) => {
    try {
        const image = await Image.findById(req.params.id);
        if (!image) {
            return res.status(404).json({ message: 'Image not found' });
        }

        // Delete from Cloudinary
        if (image.publicId) {
            await cloudinary.uploader.destroy(image.publicId);
        }

        await image.deleteOne();
        res.json({ message: 'Image deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
