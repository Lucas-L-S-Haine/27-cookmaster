const express = require('express');
const {
  insert, readAll, read, update,
  remove, updateImage,
} = require('../controllers/recipesController');
const validateJWT = require('../auth/validateJWT');

const recipesRouter = express.Router();

recipesRouter
  .route('/')
  .post(validateJWT, insert)
  .get(validateJWT, readAll);

recipesRouter
  .route('/:id')
  .get(validateJWT, read)
  .put(update)
  .delete(remove);

recipesRouter
  .route('/:id/image')
  .put(updateImage);

module.exports = recipesRouter;
