const express = require('express');
const router = express.Router();
const resultController = require('../controllers/resultController');
const multer = require('multer');
const { protect, admin } = require('../controllers/authController'); // Assuming these exist

// Configure Multer for CSV Uploads
const upload = multer({ dest: 'uploads/' });

// Public Routes
router.get('/search', resultController.getResults);

// Admin Protected Routes
// If 'protect' and 'admin' are available, use them. Otherwise, we'll need to check the exact auth implementation.
router.post('/upload', upload.single('file'), resultController.uploadResults);

module.exports = router;
