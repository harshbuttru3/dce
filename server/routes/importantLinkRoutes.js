const express = require('express');
const router = express.Router();
const { getImportantLinks, createImportantLink, deleteImportantLink } = require('../controllers/importantLinkController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', getImportantLinks);
router.post('/', protect, createImportantLink);
router.delete('/:id', protect, deleteImportantLink);

module.exports = router;
