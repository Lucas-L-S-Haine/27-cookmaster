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
  const result = await insertRecipe(name, ingredients, preparation, userId);
  const recipe = { recipe: result.ops[0] };
  return recipe;
};

const deletedRecipeValidate = async (id) => {
  const recipe = await deleteRecipe(id);
  validRecipe(recipe);
  return recipe;
};

const ownerValidate = async (recipeId, userId, userRole) => {
  try {
    const recipe = await readRecipe(recipeId);
    if (!recipe) {
      throw newError({ status: 404, message: 'recipe not found' });
    }
    if (userRole === 'admin' || recipe.userId === userId) {
      return true;
    }
      throw newError({ status: 401, message: 'unauthorized' });
  } catch (err) {
      console.error(err);
  }
};

module.exports = {
  readRecipeValidate,
  newRecipeValidate,
  deletedRecipeValidate,
  ownerValidate,
};
