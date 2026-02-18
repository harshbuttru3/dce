const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');
const multer = require('multer');
const { storage } = require('../config/cloudinary');
const { protect } = require('../middleware/authMiddleware');

const upload = multer({ storage: storage });

router.get('/', imageController.getImages);
router.post('/', protect, upload.single('file'), imageController.uploadImage);
router.delete('/:id', protect, imageController.deleteImage);

module.exports = router;
