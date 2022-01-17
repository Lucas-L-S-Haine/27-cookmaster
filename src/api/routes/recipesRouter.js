const express = require('express');
const { insert } = require('../controllers/recipesController');

const recipesRouter = express.Router();

recipesRouter
  .route('/')
  .post(insert)
  .get();

recipesRouter
  .route('/:id')
  .get()
  .put()
  .delete();

recipesRouter
  .route('/:id/image')
  .put();

module.exports = recipesRouter;
