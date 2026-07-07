const db = require("../config/db");

const createProblemsTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS problems (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      difficulty ENUM('Easy','Medium','Hard') DEFAULT 'Easy',
      description TEXT NOT NULL,
      sample_input TEXT,
      sample_output TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  db.query(sql, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("✅ Problems table created successfully");
    }
  });
};

module.exports = createProblemsTable;