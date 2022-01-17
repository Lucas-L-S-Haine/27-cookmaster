const express = require('express');
const {  } = require('../controllers/imagesController');

const imagesRouter = express.Router();

imagesRouter
  .route('/:id')
  .get()

module.exports = imagesRouter;
