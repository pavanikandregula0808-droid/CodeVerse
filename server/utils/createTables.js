const db = require("../config/db");

const createUsersTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      full_name VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      role ENUM('student','admin') DEFAULT 'student',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  db.query(query, (err) => {
    if (err) {
      console.error("❌ Error creating users table:", err);
    } else {
      console.log("✅ Users table created successfully");
    }
  });
};

module.exports = createUsersTable;