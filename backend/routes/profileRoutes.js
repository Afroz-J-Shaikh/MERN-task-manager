const express = require("express");
const router = express.Router();
const { getProfile } = require("../controllers/profileControllers");
const { verifyAccessToken } = require("../middlewares.js");

const rateLimit = require("express-rate-limit"); // Import here

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

// Add limiter to the route chain
router.get("/", limiter, verifyAccessToken, getProfile);

module.exports = router;