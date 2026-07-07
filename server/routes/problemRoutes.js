const express = require("express");
const router = express.Router();

const {
  getProblems,
  getProblem,
  addProblem,
  updateProblem,
  removeProblem,
} = require("../controllers/problemController");

// Get all problems
router.get("/", getProblems);

// Get single problem
router.get("/:id", getProblem);

// Add new problem
router.post("/", addProblem);

// Update existing problem
router.put("/:id", updateProblem);

// Delete problem
router.delete("/:id", removeProblem);

module.exports = router;