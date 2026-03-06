const User = require('../models/User');

// @desc    Create a new coordinator
// @route   POST /api/users/coordinators
// @access  Private/Admin
exports.createCoordinator = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = await User.create({
            email,
            password,
            isCoordinator: true
        });

        if (user) {
            res.status(201).json({
                _id: user._id,
                email: user.email,
                isCoordinator: user.isCoordinator
            });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all coordinators
// @route   GET /api/users/coordinators
// @access  Private/Admin
exports.getCoordinators = async (req, res) => {
    try {
        const coordinators = await User.find({ isCoordinator: true }).select('-password');
        res.json(coordinators);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete a coordinator
// @route   DELETE /api/users/coordinators/:id
// @access  Private/Admin
exports.deleteCoordinator = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (user && user.isCoordinator) {
            await user.deleteOne();
            res.json({ message: 'Coordinator removed' });
        } else {
            res.status(404).json({ message: 'Coordinator not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
