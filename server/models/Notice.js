const mongoose = require('mongoose');

const noticeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String, // User manually inputs this
        required: true
    },
    fileUrl: {
        type: String,
        required: true
    },
    fileType: {
        type: String,
        required: true
    },
    publicId: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Notice = mongoose.model('Notice', noticeSchema);

module.exports = Notice;
