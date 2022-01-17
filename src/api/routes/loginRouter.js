const express = require('express');
const { insert } = require('../controllers/loginController');

const loginRouter = express.Router();

loginRouter
  .route('/')
  .post(insert);

module.exports = loginRouter;
