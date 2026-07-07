const express = require("express");
const router = express.Router();

const {
  submitSolution,
  getUserSubmissions,
  getLeaderboard,
  getProfileStats,
} = require("../controllers/submissionController");

// Submit a solution
router.post("/", submitSolution);

// Leaderboard
router.get("/leaderboard", getLeaderboard);

// Profile Statistics
router.get("/profile/:userId", getProfileStats);

// Get submissions of a specific user
router.get("/:userId", getUserSubmissions);

module.exports = router;