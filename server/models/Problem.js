const db = require("../config/db");

// Get all problems
const getAllProblems = (callback) => {
  const sql = `
    SELECT * FROM problems
    ORDER BY id DESC
  `;

  db.query(sql, callback);
};

// Get problem by ID
const getProblemById = (id, callback) => {
  const sql = `
    SELECT * FROM problems
    WHERE id = ?
  `;

  db.query(sql, [id], callback);
};

// Add new problem
const createProblem = (problem, callback) => {
  const {
    title,
    difficulty,
    description,
    sample_input,
    sample_output,
  } = problem;

  const sql = `
    INSERT INTO problems
    (title, difficulty, description, sample_input, sample_output)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      title,
      difficulty,
      description,
      sample_input,
      sample_output,
    ],
    callback
  );
};

// Update problem
const updateProblem = (id, problem, callback) => {
  const {
    title,
    difficulty,
    description,
    sample_input,
    sample_output,
  } = problem;

  const sql = `
    UPDATE problems
    SET
      title = ?,
      difficulty = ?,
      description = ?,
      sample_input = ?,
      sample_output = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [
      title,
      difficulty,
      description,
      sample_input,
      sample_output,
      id,
    ],
    callback
  );
};

// Delete problem
const deleteProblem = (id, callback) => {
  const sql = `
    DELETE FROM problems
    WHERE id = ?
  `;

  db.query(sql, [id], callback);
};

module.exports = {
  getAllProblems,
  getProblemById,
  createProblem,
  updateProblem,
  deleteProblem,
};