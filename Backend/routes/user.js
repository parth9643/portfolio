const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Add a new route for saving user data
router.post('/getallUser', async (req, res) => {
  try {
    // Get data from the request body
    const { name, email, message } = req.body;

    // Create a new User instance
    const newUser = new User({
      name,
      email,
      message,
    });

    await newUser.save();

    res.json({ success: true, message: 'Data saved successfully!' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
