const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: true
    },
    category: {
        type: String,
        default: 'general'
    },
    publicId: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
