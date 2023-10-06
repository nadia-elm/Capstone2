'use strict';
const cors = require('cors');
const express = require('express');
const productsRoutes = require('./routes/products');

const { NotFoundError } = require('./expressError');

const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

app.use('/products', productsRoutes);

app.get('/', function (req, res) {
  return res.send('helloo');
});

/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== 'test') console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;
