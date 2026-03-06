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
    iconName: {
        type: String,
        required: true,
        default: 'Users'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Society', societySchema);
