const Joi = require('joi');
const { insertRecipe } = require('../models/recipesModel');
const { identity: newError } = require('../utils/functions');

const recipeSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
});
const regEmail = /\S+@[a-z]{3,}\.[a-z]{3,}/;

const recipeValidate = async (recipe) => {
  const { error } = recipeSchema.validate(recipe);
  if (error) {
    const message = !recipe.password || !recipe.email
      ? 'Invalid entries. Try again.' : 'Incorrect user username or password';
    throw newError({ status: 400, message });
  }
  if (!regEmail.test(recipe.email)) {
    const message = 'Incorrect username or password';
    throw newError({ status: 555, message });
  }
  const newRecipe = await insertRecipe(recipe);
  return newRecipe;
};

module.exports = {
  recipeValidate,
};
