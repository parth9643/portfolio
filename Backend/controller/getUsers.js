const User = require("../models/User");
const getUsers = async (req, res) => {
  try {
    // Get data from the request body
    const { name, email, message } = req.body;

    // Create a new User instance
    const newUser = new User({
      name,
      email,
      message,
    });

    // Save the user data to the database
    await newUser.save();

    res.json({ success: true, message: 'Data saved successfully!' });

    console.log("Received data:", req.body);
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};
module.exports = getUsers;
