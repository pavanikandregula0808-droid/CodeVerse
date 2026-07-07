const Submission = require("../models/Submission");

// Submit solution
const submitSolution = (req, res) => {
  const { user_id, problem_id, code } = req.body;

  if (!user_id || !problem_id || !code) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  Submission.createSubmission(
    {
      user_id,
      problem_id,
      code,
    },
    (err) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(201).json({
        success: true,
        message: "Solution submitted successfully",
      });
    }
  );
};

// Get submissions of a user
const getUserSubmissions = (req, res) => {
  Submission.getSubmissionsByUser(req.params.userId, (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      success: true,
      submissions: results,
    });
  });
};

// Get leaderboard
const getLeaderboard = (req, res) => {
  Submission.getLeaderboard((err, results) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      success: true,
      leaderboard: results,
    });
  });
};

// Get profile statistics
const getProfileStats = (req, res) => {
  Submission.getProfileStats(req.params.userId, (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      success: true,
      stats: results[0],
    });
  });
};

module.exports = {
  submitSolution,
  getUserSubmissions,
  getLeaderboard,
  getProfileStats,
};