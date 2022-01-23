const connection = require('./connections');

const insertRecipe = async (recipe) => {
  const newConnection = await connection();
  const newRecipe = await newConnection
    .collection('recipes').insertOne(recipe);
  return newRecipe;
};

const readAllRecipes = async () => {
  const newConnection = await connection();
  const recipesList = await newConnection
    .collection('recipes').find().toArray();
  return recipesList;
};

module.exports = {
  insertRecipe,
  readAllRecipes,
};
