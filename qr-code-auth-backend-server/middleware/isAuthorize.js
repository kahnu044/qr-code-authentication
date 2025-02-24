const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_PRIVATE_KEY;

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res
        .status(401)
        .json({ success: false, error: "Authorization header missing" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ success: false, error: "Authorization Token missing" });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;

    next();
  } catch (error) {
    console.error("JWT auth error:", error);
    return res.status(401).json({ success: false, error: "Invalid token" });
  }
};
