const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// ==========================
// Register User
// ==========================
const register = async (req, res) => {
  try {
    const { full_name, email, password } = req.body;

    if (!full_name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    User.findUserByEmail(email, async (err, results) => {
      if (err) {
        console.error("❌ MySQL Error:", err);

        return res.status(500).json({
          success: false,
          message: "Database error",
          error: err.message,
        });
      }

      if (results.length > 0) {
        return res.status(400).json({
          success: false,
          message: "Email already exists",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      User.createUser(
        {
          full_name,
          email,
          password: hashedPassword,
        },
        (err) => {
          if (err) {
            console.error("❌ MySQL Insert Error:", err);

            return res.status(500).json({
              success: false,
              message: "Database error",
              error: err.message,
            });
          }

          return res.status(201).json({
            success: true,
            message: "User registered successfully",
          });
        }
      );
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ==========================
// Login User
// ==========================
const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  User.findUserByEmail(email, async (err, results) => {
    if (err) {
      console.error("❌ MySQL Error:", err);

      return res.status(500).json({
        success: false,
        message: "Database error",
        error: err.message,
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const user = results[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user.id,
        full_name: user.full_name,
        email: user.email,
        role: user.role,
      },
    });
  });
};

module.exports = {
  register,
  login,
};