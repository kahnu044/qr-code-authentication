// routes/pusherRoutes.js
const express = require("express");
const router = express.Router();
const pusher = require("../config/pusher");

// Pusher auth
router.post("/auth", (req, res) => {
  try {
    const { socket_id, channel_name } = req.body;
    const authResponse = pusher.authenticate(socket_id, channel_name);
    return res.status(200).json(authResponse);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Pusher auth failed to verify",
    });
  }
});

router.post("/sent-event", (req, res) => {
  const { chanelId } = req.body;
  const channelName = "private-" + chanelId;
  pusher.trigger(channelName, "qr-code-login", {
    message: "QR code has been scanned successfully",
    data: req.body,
  });

  return res.status(200).json({
    success: true,
    message: "Event Sent successfully",
  });
});

module.exports = router;
