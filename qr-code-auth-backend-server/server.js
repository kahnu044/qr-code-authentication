require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Pusher = require("pusher");
const app = express();
const PORT = process.env.PORT || 5002;

//Pusher configuration
const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  useTLS: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.listen(PORT, () => {
  console.log("Server running on " + PORT);
});
