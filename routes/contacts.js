const express = require('express');
const router = express.Router();

// @route   POST api/contacts
// @desc    Register a contact
// @access  Private
router.post('/', (req, res) => {
    res.send('Register a contact');
});

// @route   GET api/contacts/
// @desc    Get a contact
// @access  Private
router.get('/', (req, res) => {
    res.send('Get a contact');
});

// @route   UPDATE api/contacts/:id
// @desc    Update a contact
// @access  Public
router.put('/:id', (req, res) => {
    res.send('Update a contact');
});

// @route   DELETE api/contacts/:id
// @desc    Delete a contact
// @access  Public
router.delete('/:id', (req, res) => {
    res.send('Delete a contact');
});

module.exports = router;