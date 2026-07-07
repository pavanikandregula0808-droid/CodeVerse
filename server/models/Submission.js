const db = require("../config/db");

// Save a submission
const createSubmission = (submission, callback) => {
  const { user_id, problem_id, code } = submission;

  const sql = `
    INSERT INTO submissions (user_id, problem_id, code)
    VALUES (?, ?, ?)
  `;

  db.query(sql, [user_id, problem_id, code], callback);
};

// Get submissions by user
const getSubmissionsByUser = (userId, callback) => {
  const sql = `
    SELECT s.*, p.title
    FROM submissions s
    JOIN problems p ON s.problem_id = p.id
    WHERE s.user_id = ?
    ORDER BY s.submitted_at DESC
  `;

  db.query(sql, [userId], callback);
};

// Get leaderboard
const getLeaderboard = (callback) => {
  const sql = `
    SELECT
      u.id,
      u.full_name,
      u.email,
      COUNT(s.id) AS submissions
    FROM users u
    LEFT JOIN submissions s
      ON u.id = s.user_id
    GROUP BY u.id
    ORDER BY submissions DESC, u.full_name ASC
  `;

  db.query(sql, callback);
};

// Get profile statistics
const getProfileStats = (userId, callback) => {
  const sql = `
    SELECT
      COUNT(*) AS totalSubmissions,
      COUNT(DISTINCT problem_id) AS problemsAttempted
    FROM submissions
    WHERE user_id = ?
  `;

  db.query(sql, [userId], callback);
};

module.exports = {
  createSubmission,
  getSubmissionsByUser,
  getLeaderboard,
  getProfileStats,
};