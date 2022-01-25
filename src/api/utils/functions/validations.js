const Joi = require('joi');
const newError = require('./identity');

const recipeValidate = (name, ingredients, preparation) => {
  const recipeSchema = Joi.object({
    name: Joi.string().required(),
    ingredients: Joi.string().required(),
    preparation: Joi.string().required(),
  });
  const { error } = recipeSchema.validate({ name, ingredients, preparation });
  if (error) throw error;
};

const validRecipe = (recipe) => {
  if (!recipe) {
    throw newError({ status: 404, message: 'recipe not found' });
  }
};

module.exports = {
  recipeValidate,
  validRecipe,
};
