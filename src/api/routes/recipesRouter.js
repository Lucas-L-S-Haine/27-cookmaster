const express = require('express');
const {
  insert, readAll, read, update,
  remove, updateImage,
} = require('../controllers/recipesController');
const { insertJWT, readAllJWT, readJWT } = require('../auth/validateJWT');

const recipesRouter = express.Router();

recipesRouter
  .route('/')
  .post(insertJWT, insert)
  .get(readAllJWT, readAll);

recipesRouter
  .route('/:id')
  .get(readJWT, read)
  .put(update)
  .delete(remove);

recipesRouter
  .route('/:id/image')
  .put(updateImage);

module.exports = recipesRouter;
