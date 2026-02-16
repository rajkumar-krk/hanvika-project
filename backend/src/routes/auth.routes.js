const express = require("express");
const router = express.Router();

const { login } = require("../controllers/auth.controller");

// Login route
router.post("/login", login);

// Test route
router.get("/test", (req, res) => {
  res.status(200).json({
    message: "Auth route working successfully"
  });
});

module.exports = router;
