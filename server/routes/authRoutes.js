const express = require('express');
const router = express.Router();
const { login, register, coordinatorLogin } = require('../controllers/authController');

router.post('/login', login);
router.post('/register', register); // Keep this open for now to create the first admin
router.post('/coordinator/login', coordinatorLogin);

module.exports = router;
