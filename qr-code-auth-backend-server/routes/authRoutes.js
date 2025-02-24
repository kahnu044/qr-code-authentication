const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const isAuthorize = require("../middleware/isAuthorize");

// Registration endpoint
router.post("/register", userController.register);

// Login endpoint
router.post("/login", userController.login);

// QR Code Initiate endpoint
router.get("/qr-code-token", userController.initiateQRCodeLogin);

router.post("/process-qr-code", isAuthorize, userController.processQrCode);

module.exports = router;
