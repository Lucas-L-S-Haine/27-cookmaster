const Joi = require('joi');
const {
  insertRecipe, readRecipe, readAllRecipes,
} = require('../models/recipesModel');
const { insertJWT, readAllJWT, readJWT } = require('../auth/validateJWT');
const { identity: newError } = require('../utils/functions');

const recipeSchema = Joi.object({
    name: Joi.string().required(),
    ingredients: Joi.string().required(),
    preparation: Joi.string().required(),
});

const recipeValidate = async (recipe) => {
  const { error } = recipeSchema.validate(recipe);
  if (error) {
    const message = !recipe.password || !recipe.email
      ? 'Invalid entries. Try again.' : 'Incorrect user username or password';
    throw newError({ status: 400, message });
  }
  const newRecipe = await insertRecipe(recipe);
  return newRecipe;
};

const readRecipeValidate = async (id) => {
  const response = await readRecipe(id);
  if (!response) {
    throw newError({ status: 123, message: 'qualquer coisa' });
  }
  return response;
};

const readAllRecipesValidate = async () => {
  try {
    const response = await readAllRecipes();
    return response;
  } catch (err) {
    throw newError({ status: 234, message: 'xablau' });
  }
};

module.exports = {
  recipeValidate,
  readRecipeValidate,
  readAllRecipesValidate,
};
