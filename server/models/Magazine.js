const mongoose = require('mongoose');

const magazineSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    pdfUrl: {
        type: String,
        required: true
    },
    coverImage: {
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

module.exports = mongoose.model('Magazine', magazineSchema);
