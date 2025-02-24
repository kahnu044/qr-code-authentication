// controllers/userController.js
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, error: "email and password are required." });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, error: "email already exists." });
    }

    // Create new user (password will be hashed via pre-save hook)
    const user = new User({ email, password, name });
    await user.save();
    return res
      .status(201)
      .json({ success: true, message: "User registered successfully." });
  } catch (error) {
    console.error("Registration error:", error);
    return res
      .status(500)
      .json({ success: false, error: "Internal server error." });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "email and password are required." });
  }

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials." });
    }

    // Compare the password using bcrypt
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials." });
    }

    let expiresIn = "1m";
    if (req.body?.platform && req.body?.platform === "app") {
      expiresIn = "5m";
    }
    // Generate a JWT
    const token = jwt.sign(
      { id: user._id, email: user.email, name: user?.name },
      process.env.JWT_PRIVATE_KEY,
      { expiresIn: expiresIn }
    );

    // Respond with user data (excluding password)
    return res.json({
      message: "Login successful",
      token: token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
};
