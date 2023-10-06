const express = require('express');
// const axios = require('axios');
const db = require('../db');

const router = new express.Router();

// const url = 'https://course-api.com/react-store-products';

router.get('/', async (req, res, next) => {
  try {
    const response = await db.query(`SELECT * FROM products`);
    return res.json(response.rows);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
