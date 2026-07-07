const Problem = require("../models/Problem");

// Get all problems
const getProblems = (req, res) => {
  Problem.getAllProblems((err, results) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      success: true,
      problems: results,
    });
  });
};

// Get one problem
const getProblem = (req, res) => {
  Problem.getProblemById(req.params.id, (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (results.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Problem not found",
      });
    }

    res.json({
      success: true,
      problem: results[0],
    });
  });
};

// Add problem
const addProblem = (req, res) => {
  Problem.createProblem(req.body, (err) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.status(201).json({
      success: true,
      message: "Problem added successfully",
    });
  });
};

// Update problem
const updateProblem = (req, res) => {
  Problem.updateProblem(req.params.id, req.body, (err) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      success: true,
      message: "Problem updated successfully",
    });
  });
};

// Delete problem
const removeProblem = (req, res) => {
  Problem.deleteProblem(req.params.id, (err) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      success: true,
      message: "Problem deleted successfully",
    });
  });
};

module.exports = {
  getProblems,
  getProblem,
  addProblem,
  updateProblem,
  removeProblem,
};