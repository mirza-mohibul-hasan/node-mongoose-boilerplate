const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected route example
router.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "This is a protected route" });
});

module.exports = router;
