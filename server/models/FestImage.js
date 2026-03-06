const mongoose = require('mongoose');

const festImageSchema = mongoose.Schema({
    imageUrl: {
        type: String,
        required: true
    },
    publicId: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('FestImage', festImageSchema);
