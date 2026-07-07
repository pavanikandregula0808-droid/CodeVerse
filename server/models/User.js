const db = require("../config/db");

const createUser = (user, callback) => {
  const { full_name, email, password } = user;

  const sql = `
    INSERT INTO users (full_name, email, password)
    VALUES (?, ?, ?)
  `;

  db.query(sql, [full_name, email, password], callback);
};

const findUserByEmail = (email, callback) => {
  const sql = `
    SELECT * FROM users WHERE email = ?
  `;

  db.query(sql, [email], callback);
};

module.exports = {
  createUser,
  findUserByEmail,
};