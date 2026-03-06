const express = require('express');
const router = express.Router();
const { createCoordinator, getCoordinators, deleteCoordinator } = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/coordinators')
    .post(protect, admin, createCoordinator)
    .get(protect, admin, getCoordinators);

router.route('/coordinators/:id')
    .delete(protect, admin, deleteCoordinator);

module.exports = router;
