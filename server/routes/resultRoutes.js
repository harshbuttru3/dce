const express = require('express');
const router = express.Router();
const resultController = require('../controllers/resultController');
const multer = require('multer');
const { protect, admin } = require('../middleware/authMiddleware');

// Configure Multer for CSV Uploads
const upload = multer({ dest: 'uploads/' });

// Public Routes
router.get('/search', resultController.getResults);

// Admin Protected Routes
router.post('/upload', protect, admin, upload.single('file'), resultController.uploadResults);
router.post('/', protect, admin, resultController.addResult);
router.put('/:id', protect, admin, resultController.updateResult);
router.delete('/:id', protect, admin, resultController.deleteResult);

module.exports = router;
