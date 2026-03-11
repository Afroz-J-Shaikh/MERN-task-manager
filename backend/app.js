const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize"); // 1. Added Sanitize Import
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const profileRoutes = require("./routes/profileRoutes");

app.use(express.json());
app.use(cors());
app.use(mongoSanitize()); // 2. Added Sanitize Middleware (Fixes NoSQL Injection Error)

// 3. Rate Limiting (Fixes Missing Rate Limiting Alert)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
  message: "Too many requests from this IP, please try again later.",
  standardHeaders: true, 
  legacyHeaders: false,
});
app.use(limiter); 

const mongoUrl = process.env.MONGODB_URL;

// Modern Mongoose 7/8 connection
mongoose.connect(mongoUrl)
  .then(() => {
    console.log("Mongodb connected...");
  })
  .catch((err) => {
    console.error("Mongodb connection error:", err);
    process.exit(1); 
  });

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/profile", profileRoutes);

if (process.env.NODE_ENV === "production") {
  // Change 'build' to 'dist' to match Vite's default output
  app.use(express.static(path.resolve(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html")));
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});