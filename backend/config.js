'use strict';

/** Shared config for application; can be required many places. */

require('dotenv').config();
require('colors');

const SECRET_KEY = process.env.SECRET_KEY || 'secret-dev';

const PORT = +process.env.PORT || 3001;
// import { v2 as cloudinary } from 'cloudinary';
// const cloudinary = require('cloudinary').v2;

// cloudinary.config({
//   cloud_name: 'dwp1kgrki',
//   api_key: '163297821233471',
//   api_secret: '6PMpVd1Z6XOK1HE4pdKgWQ1gN44',
// });

// cloudinary.config({
//   cloud_name: 'dwp1kgrki',
//   api_key: '163297821233471',
//   api_secret: '6PMpVd1Z6XOK1HE4pdKgWQ1gN44',
// });

// CLOUD_NAME = 'dwp1kgrki';
// API_KEY = '163297821233471';
// API_SECRET = '6PMpVd1Z6XOK1HE4pdKgWQ1gN44';

// CLOUDINARY_URL=cloudinary://163297821233471:6PMpVd1Z6XOK1HE4pdKgWQ1gN44@dwp1kgrki

// Use dev database, testing database, or via env var, production database
// function getDatabaseUri() {
//   return process.env.NODE_ENV === 'test'
//     ? 'storedb_test'
//     : process.env.DATABASE_URL || 'storedb';
// }

// Speed up bcrypt during tests, since the algorithm safety isn't being tested
//
// WJB: Evaluate in 2021 if this should be increased to 13 for non-test use
const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === 'test' ? 1 : 12;

console.log('store Config:'.green);
console.log('SECRET_KEY:'.yellow, SECRET_KEY);
console.log('PORT:'.yellow, PORT.toString());
console.log('BCRYPT_WORK_FACTOR'.yellow, BCRYPT_WORK_FACTOR);
// console.log('Database:'.yellow, getDatabaseUri());
console.log('---');

module.exports = {
  SECRET_KEY,
  PORT,
  BCRYPT_WORK_FACTOR,
  // getDatabaseUri,
};
