const {
  insertRecipe,
  readRecipe,
  deleteRecipe,
} = require('../models/recipesModel');

const {
  identity: newError,
  recipeValidate,
  validRecipe,
} = require('../utils/functions');

const readRecipeValidate = async (id) => {
  const result = await readRecipe(id);
  validRecipe(result);
  return result;
};

const newRecipeValidate = async (name, ingredients, preparation, userId) => {
  recipeValidate(name, ingredients, preparation);
  const recipe = await insertRecipe(name, ingredients, preparation, userId);
  return recipe;
};

const deletedRecipeValidate = async (id) => {
  const recipe = await deleteRecipe(id);
  validRecipe(recipe);
  return recipe;
};

const ownerValidate = async (recipeId, userId, userRole) => {
  const recipe = await readRecipe(recipeId);
  validRecipe(recipe);
  if (recipe.userId !== userId && userRole !== 'admin') {
    throw newError({ status: 401, message: 'unauthorized' });
  }
};

module.exports = {
  readRecipeValidate,
  newRecipeValidate,
  deletedRecipeValidate,
  ownerValidate,
};
