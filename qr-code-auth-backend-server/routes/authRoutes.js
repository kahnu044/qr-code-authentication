const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Registration endpoint
router.post("/register", userController.register);

// Login endpoint
router.post("/login", userController.login);

// QR Code Initiate endpoint
router.post("/qr-code-login", userController.initiateQRCodeLogin);

module.exports = router;
