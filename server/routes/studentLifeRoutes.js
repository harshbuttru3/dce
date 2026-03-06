const express = require('express');
const router = express.Router();
const multer = require('multer');

const {
    addFest, getFests, deleteFest,
    addSociety, getSocieties, deleteSociety,
    addTestimonial, getApprovedTestimonials, getAllTestimonialsAdmin, approveTestimonial, deleteTestimonial
} = require('../controllers/studentLifeController');

const { protect, admin, coordinatorOrAdmin } = require('../middleware/authMiddleware');

const upload = multer({ storage: multer.memoryStorage() });

// Fests
router.route('/fests')
    .post(protect, coordinatorOrAdmin, upload.array('images', 10), addFest)
    .get(getFests); // Public read
router.route('/fests/:id')
    .delete(protect, coordinatorOrAdmin, deleteFest);

// Societies
router.route('/societies')
    .post(protect, coordinatorOrAdmin, addSociety)
    .get(getSocieties); // Public read
router.route('/societies/:id')
    .delete(protect, coordinatorOrAdmin, deleteSociety);

// Testimonials
router.route('/testimonials/public')
    .post(upload.single('image'), addTestimonial); // Public can submit anonymously

router.route('/testimonials')
    .get(getApprovedTestimonials); // Public read only approved

// Admin Testimonial Management
router.route('/testimonials/admin')
    .get(protect, admin, getAllTestimonialsAdmin);
    
router.route('/testimonials/:id/approve')
    .patch(protect, admin, approveTestimonial);

router.route('/testimonials/:id')
    .delete(protect, admin, deleteTestimonial);

module.exports = router;
