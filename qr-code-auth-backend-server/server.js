require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const authRoutes = require("./routes/authRoutes");
const pusherRoutes = require("./routes/pusherRoutes");

const app = express();
const PORT = process.env.PORT || 5002;

// Connect to MongoDB (adjust the connection string as needed)
mongoose.connect("mongodb://localhost:27017/qr-auth", {});
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});
mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use("/auth", authRoutes);
app.use("/pusher", pusherRoutes);

app.listen(PORT, () => {
  console.log("Server running on " + PORT);
});
