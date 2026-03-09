const Fest = require('../models/Fest');
const Society = require('../models/Society');
const Testimonial = require('../models/Testimonial');
const { cloudinary } = require('../config/cloudinary');

// --- FESTS ---
exports.addFest = async (req, res) => {
    try {
        const { title, description, youtubeLink } = req.body;

        let uploadedImages = [];

        // Handle multiple files
        if (req.files && req.files.length > 0) {
            const uploadPromises = req.files.map(file => {
                const b64 = Buffer.from(file.buffer).toString('base64');
                const dataURI = 'data:' + file.mimetype + ';base64,' + b64;
                return cloudinary.uploader.upload(dataURI, { folder: 'dce_fest' });
            });

            const results = await Promise.all(uploadPromises);
            uploadedImages = results.map(result => ({
                imageUrl: result.secure_url,
                publicId: result.public_id
            }));
        }

        const fest = await Fest.create({
            title,
            description,
            youtubeLink: youtubeLink || '',
            images: uploadedImages
        });

        res.status(201).json(fest);
    } catch (error) {
        console.error("Fest upload error:", error);
        res.status(500).json({ message: error.message });
    }
};

exports.getFests = async (req, res) => {
    try {
        const fests = await Fest.find().sort({ createdAt: -1 });
        res.json(fests);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteFest = async (req, res) => {
    try {
        const fest = await Fest.findById(req.params.id);
        if (fest) {
            // Delete all associated images from Cloudinary
            if (fest.images && fest.images.length > 0) {
                const deletePromises = fest.images
                    .filter(img => img.publicId)
                    .map(img => cloudinary.uploader.destroy(img.publicId));
                await Promise.all(deletePromises);
            }
            await fest.deleteOne();
            res.json({ message: 'Fest removed' });
        } else {
            res.status(404).json({ message: 'Fest not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// --- SOCIETIES ---
exports.addSociety = async (req, res) => {
    try {
        const { name, description, longDescription, iconName } = req.body;

        let heroImageData = { imageUrl: '', publicId: '' };
        let galleryData = [];

        // Handle Hero Image
        if (req.files && req.files.heroImage && req.files.heroImage.length > 0) {
            const file = req.files.heroImage[0];
            const b64 = Buffer.from(file.buffer).toString('base64');
            const dataURI = 'data:' + file.mimetype + ';base64,' + b64;
            const result = await cloudinary.uploader.upload(dataURI, { folder: 'dce_societies/hero' });
            heroImageData = { imageUrl: result.secure_url, publicId: result.public_id };
        }

        // Handle Gallery Images
        if (req.files && req.files.gallery && req.files.gallery.length > 0) {
            const uploadPromises = req.files.gallery.map(file => {
                const b64 = Buffer.from(file.buffer).toString('base64');
                const dataURI = 'data:' + file.mimetype + ';base64,' + b64;
                return cloudinary.uploader.upload(dataURI, { folder: 'dce_societies/gallery' });
            });
            const results = await Promise.all(uploadPromises);
            galleryData = results.map(result => ({
                imageUrl: result.secure_url,
                publicId: result.public_id
            }));
        }

        const society = await Society.create({
            name,
            description,
            longDescription: longDescription || '',
            iconName: iconName || 'Users',
            heroImage: heroImageData,
            gallery: galleryData
        });
        res.status(201).json(society);
    } catch (error) {
        console.error("Society upload error:", error);
        res.status(500).json({ message: error.message });
    }
};

exports.getSocieties = async (req, res) => {
    try {
        const societies = await Society.find().sort({ createdAt: -1 });
        res.json(societies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateSociety = async (req, res) => {
    try {
        const { name, description, longDescription, iconName } = req.body;
        const society = await Society.findById(req.params.id);

        if (!society) {
            return res.status(404).json({ message: 'Society not found' });
        }

        // Handle Hero Image update
        if (req.files && req.files.heroImage && req.files.heroImage.length > 0) {
            // Delete old hero image if exists
            if (society.heroImage && society.heroImage.publicId) {
                await cloudinary.uploader.destroy(society.heroImage.publicId);
            }
            const file = req.files.heroImage[0];
            const b64 = Buffer.from(file.buffer).toString('base64');
            const dataURI = 'data:' + file.mimetype + ';base64,' + b64;
            const result = await cloudinary.uploader.upload(dataURI, { folder: 'dce_societies/hero' });
            society.heroImage = { imageUrl: result.secure_url, publicId: result.public_id };
        }

        // Handle Gallery Appending
        if (req.files && req.files.gallery && req.files.gallery.length > 0) {
            const uploadPromises = req.files.gallery.map(file => {
                const b64 = Buffer.from(file.buffer).toString('base64');
                const dataURI = 'data:' + file.mimetype + ';base64,' + b64;
                return cloudinary.uploader.upload(dataURI, { folder: 'dce_societies/gallery' });
            });
            const results = await Promise.all(uploadPromises);
            const newGalleryItems = results.map(result => ({
                imageUrl: result.secure_url,
                publicId: result.public_id
            }));
            society.gallery = [...society.gallery, ...newGalleryItems];
        }

        // Update other fields
        society.name = name || society.name;
        society.description = description || society.description;
        society.longDescription = longDescription || society.longDescription;
        society.iconName = iconName || society.iconName;

        await society.save();
        res.json(society);
    } catch (error) {
        console.error("Society update error:", error);
        res.status(500).json({ message: error.message });
    }
};

exports.deleteSociety = async (req, res) => {
    try {
        const society = await Society.findById(req.params.id);
        if (society) {
            // Delete hero image from Cloudinary
            if (society.heroImage && society.heroImage.publicId) {
                await cloudinary.uploader.destroy(society.heroImage.publicId);
            }
            // Delete gallery from Cloudinary
            if (society.gallery && society.gallery.length > 0) {
                const deletePromises = society.gallery
                    .filter(img => img.publicId)
                    .map(img => cloudinary.uploader.destroy(img.publicId));
                await Promise.all(deletePromises);
            }
            await society.deleteOne();
            res.json({ message: 'Society removed' });
        } else {
            res.status(404).json({ message: 'Society not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// --- TESTIMONIALS ---
exports.addTestimonial = async (req, res) => {
    try {
        const { name, batch, branch, company, text } = req.body;

        if (!req.file) {
            return res.status(400).json({ message: 'No image provided for testimonial' });
        }

        const b64 = Buffer.from(req.file.buffer).toString('base64');
        const dataURI = 'data:' + req.file.mimetype + ';base64,' + b64;
        const result = await cloudinary.uploader.upload(dataURI, { folder: 'dce_testimonials' });

        const testimonial = await Testimonial.create({
            name, batch, branch, company, text,
            imageUrl: result.secure_url,
            publicId: result.public_id,
            isApproved: false // Requires admin moderation
        });

        res.status(201).json({ message: 'Testimonial submitted and pending approval', testimonial });
    } catch (error) {
        console.error("Testimonial upload error:", error);
        res.status(500).json({ message: error.message });
    }
};

exports.getApprovedTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find({ isApproved: true }).sort({ createdAt: -1 });
        res.json(testimonials);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Admin Only
exports.getAllTestimonialsAdmin = async (req, res) => {
    try {
        // Sort pending first, then by date
        const testimonials = await Testimonial.find().sort({ isApproved: 1, createdAt: -1 });
        res.json(testimonials);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Admin Only
exports.approveTestimonial = async (req, res) => {
    try {
        const testimonial = await Testimonial.findById(req.params.id);
        if (testimonial) {
            testimonial.isApproved = true;
            await testimonial.save();
            res.json({ message: 'Testimonial approved', testimonial });
        } else {
            res.status(404).json({ message: 'Testimonial not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteTestimonial = async (req, res) => {
    try {
        const testimonial = await Testimonial.findById(req.params.id);
        if (testimonial) {
            if (testimonial.publicId) {
                await cloudinary.uploader.destroy(testimonial.publicId);
            }
            await testimonial.deleteOne();
            res.json({ message: 'Testimonial removed' });
        } else {
            res.status(404).json({ message: 'Testimonial not found' });
        }
    } catch (error) {
        console.error("Testimonial deletion error:", error);
        res.status(500).json({ message: error.message });
    }
};

