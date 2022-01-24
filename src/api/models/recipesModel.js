const { ObjectId } = require('mongodb');
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

const readRecipe = async (id) => {
  const recipeId = new ObjectId(id);
  console.log(recipeId);
  const newConnection = await connection();
  const recipe = await newConnection
    .collection('recipes').findOne(recipeId);
  return recipe;
};

module.exports = {
  insertRecipe,
  readAllRecipes,
  readRecipe,
};
