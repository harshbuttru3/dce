const mongoose = require('mongoose');

const societySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    longDescription: {
        type: String,
        required: true,
        default: ''
    },
    iconName: {
        type: String,
        required: true,
        default: 'Users'
    },
    heroImage: {
        imageUrl: { type: String, default: '' },
        publicId: { type: String, default: '' }
    },
    gallery: [
        {
            imageUrl: { type: String },
            publicId: { type: String }
        }
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model('Society', societySchema);
