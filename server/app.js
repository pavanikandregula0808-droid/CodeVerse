const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Import Database Connection
const db = require("./config/db");

// Import Table Creators
const createUsersTable = require("./utils/createTables");
const createProblemsTable = require("./utils/createProblemsTable");
const createSubmissionsTable = require("./utils/createSubmissionsTable");

// Import Routes
const authRoutes = require("./routes/authRoutes");
const problemRoutes = require("./routes/problemRoutes");
const submissionRoutes = require("./routes/submissionRoutes");

// Import JWT Middleware
const verifyToken = require("./middleware/authMiddleware");

const app = express();

// Create Tables (Runs once when the server starts)
createUsersTable();
createProblemsTable();
createSubmissionsTable();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/problems", problemRoutes);
app.use("/api/submissions", submissionRoutes);

// Home Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to CodeVerse API 🚀",
  });
});

// Test API
app.get("/api/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is working successfully!",
  });
});

// ================================
// TEMPORARY ROUTE - MAKE ADMIN
// Run only once, then delete it.
// ================================
app.get("/api/make-admin", (req, res) => {
  const email = "pavanikandregula0808@gmail.com"; // Change if your email is different

  const sql = "UPDATE users SET role = 'admin' WHERE email = ?";

  db.query(sql, [email], (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        error: err.message,
      });
    }

    res.json({
      success: true,
      message: "User is now an admin!",
    });
  });
});

// Protected Profile Route
app.get("/api/profile", verifyToken, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to your profile!",
    user: req.user,
  });
});

module.exports = app;