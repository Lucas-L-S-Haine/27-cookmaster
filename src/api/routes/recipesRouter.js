const express = require('express');
const {
  insert, readAll, read, update,
  remove, updateImage,
} = require('../controllers/recipesController');

const recipesRouter = express.Router();

recipesRouter
  .route('/')
  .post(insert)
  .get(readAll);

recipesRouter
  .route('/:id')
  .get(read)
  .put(update)
  .delete(remove);

recipesRouter
  .route('/:id/image')
  .put(updateImage);

module.exports = recipesRouter;
