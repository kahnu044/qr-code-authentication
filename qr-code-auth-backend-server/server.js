require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const authRoutes = require("./routes/authRoutes");
const pusherRoutes = require("./routes/pusherRoutes");
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5002;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use("/auth", authRoutes);
app.use("/pusher", pusherRoutes);

app.listen(PORT, () => {
  console.log("Server running on " + PORT);
});
