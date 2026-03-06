const mongoose = require('mongoose');

const testimonialSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: true
    },
    publicId: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    isApproved: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Testimonial', testimonialSchema);
