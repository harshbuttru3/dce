const express = require('express');
const router = express.Router();
const resultController = require('../controllers/resultController');
const multer = require('multer');
const { protect, admin } = require('../middleware/authMiddleware');

// Public Routes
router.get('/search', resultController.getResults);

// Admin Protected Routes
router.post('/bulk-save', protect, admin, resultController.bulkSaveResults);
router.post('/', protect, admin, resultController.addResult);
router.put('/:id', protect, admin, resultController.updateResult);
router.delete('/:id', protect, admin, resultController.deleteResult);

module.exports = router;
