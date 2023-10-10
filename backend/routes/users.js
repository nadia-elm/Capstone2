const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db');

const router = express.Router();

// User registration
router.post('/register', async (req, res, next) => {
  try {
    const { username, password, email } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const response = await db.query(
      'INSERT INTO users(username, password, email) VALUES($1, $2, $3) RETURNING *',
      [username, hashedPassword, email]
    );

    res.json(response.rows[0]);
  } catch (error) {
    next(error);
  }
});

// User login
router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const response = await db.query('SELECT * FROM users WHERE username = $1', [
      username,
    ]);

    const user = response.rows[0];

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({ message: 'Logged in', userId: user.id });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    next(error);
  }
});

// Add more routes as needed, for example, adding and removing products to favorites

module.exports = router;
