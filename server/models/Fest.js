const mongoose = require('mongoose');

const festSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    youtubeLink: {
        type: String,
        required: false
    },
    images: [{
        imageUrl: { type: String, required: true },
        publicId: { type: String, required: true }
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Fest', festSchema);
