const db = require("../config/db");

const createSubmissionsTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS submissions (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      problem_id INT NOT NULL,
      code TEXT NOT NULL,
      status VARCHAR(50) DEFAULT 'Submitted',
      submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY (problem_id) REFERENCES problems(id) ON DELETE CASCADE
    )
  `;

  db.query(sql, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("✅ Submissions table created successfully");
    }
  });
};

module.exports = createSubmissionsTable;