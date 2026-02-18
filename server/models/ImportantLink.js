const mongoose = require('mongoose');

const importantLinkSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

const ImportantLink = mongoose.model('ImportantLink', importantLinkSchema);

module.exports = ImportantLink;
