const express = require('express');
const router = express.Router();

// @route   POST api/auth
// @desc    Login a user
// @access  Private
router.post('/', (req, res) => {
    res.send('Login a user');
});

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', (req, res) => {
    res.send('Get logged in user');
});

module.exports = router;