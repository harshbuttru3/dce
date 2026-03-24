const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    registrationNo: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    rollNo: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    semester: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true,
        default: '2023-27'
    },
    subjects: [
        {
            name: { type: String, required: true },
            internal: { type: Number, default: 0 },
            external: { type: Number, default: 0 },
            total: { type: Number, default: 0 },
            grade: { type: String, default: "" },
            credit: { type: Number, default: 0 }
        }
    ],
    sgpa: {
        type: Number,
        default: 0
    },
    cgpa: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ['Pass', 'Fail', 'Promoted', 'Pending'],
        default: 'Pass'
    },
    uploadedAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = mongoose.model('Result', resultSchema);
