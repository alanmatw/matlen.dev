const express = require('express');
const router = express.Router();
const Contact = require('../models/contacts');

router.post('/contact', async (req, res) => {
    const { name, email, comment } = req.body;

    try {
        const newContact = new Contact({
            name,
            email,
            comment,
        });

        await newContact.save();
        res.status(200).json({ message: 'Message received successfully' });
    } catch (error) {
        console.error('Failed to save contact message', error);
        res.status(500).json({ message: 'Failed to save message' });
    }
});

module.exports = router;