const mongoose = require('mongoose');

const carouselSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    imageUrl: {
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

module.exports = mongoose.model('Carousel', carouselSchema);
