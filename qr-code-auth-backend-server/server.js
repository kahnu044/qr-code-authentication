const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5002;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.listen(PORT, () => {
  console.log("Server running on " + PORT);
});
