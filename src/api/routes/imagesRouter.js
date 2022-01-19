const express = require('express');
const { view } = require('../controllers/imagesController');

const imagesRouter = express.Router();

imagesRouter
  .route('/:id')
  .get(view);

module.exports = imagesRouter;
