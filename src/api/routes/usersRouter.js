const express = require('express');
const { insert } = require('../controllers/usersController');

const usersRouter = express.Router();

usersRouter
  .route('/')
  .post(insert)

module.exports = usersRouter;
