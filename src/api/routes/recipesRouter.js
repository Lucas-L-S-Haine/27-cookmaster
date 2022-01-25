const rescue = require('express-rescue');
const {
  insert, readAll, read, update,
  remove, updateImage,
} = require('../controllers/recipesController');
const {
  validateJWT,
} = require('../auth/validateJWT');

const recipesRouter = (app) => {
  app
    .route('/recipes')
    .get(rescue(readAll))
    .post(rescue(validateJWT), rescue(insert));

  app
    .route('/recipes/:id')
    .get(rescue(read))
    .put(rescue(validateJWT), rescue(update))
    .delete(rescue(validateJWT), rescue(remove));

  app
    .route('/recipes/:id/image')
    .put(rescue(validateJWT), rescue(updateImage));
};

module.exports = recipesRouter;
