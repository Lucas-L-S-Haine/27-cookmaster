const { ObjectId } = require('mongodb');
const connection = require('./connections');

const insertRecipe = async (name, ingredients, preparation, userId) => {
  const newConnection = await connection();
  const newRecipe = await newConnection
    .collection('recipes')
    .insertOne({ name, ingredients, preparation, userId });
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
  if (!ObjectId.isValid(id)) return null;
  const newConnection = await connection();
  const recipe = await newConnection
    .collection('recipes').findOne({ _id: recipeId });
  return recipe;
};

const updateRecipe = async (id, name, ingredients, preparation) => {
  const recipeId = new ObjectId(id);
  const newConnection = await connection();
  await newConnection
    .collection('recipes').updateOne(
      { _id: recipeId },
      { $set: { name, ingredients, preparation } },
    );
  const recipe = await newConnection.collection('recipes').findOne(recipeId);
  return recipe;
};

const deleteRecipe = async (id) => {
  const recipeId = new ObjectId(id);
  const newConnection = await connection();
  const recipe = await newConnection.collection('recipes').findOne(recipeId);
  await newConnection.collection('recipes').deleteOne({ _id: recipeId });
  return recipe;
};

const updateRecipeImage = async (id, imagePath) => {
  const imageId = new ObjectId(id);
  const newConnection = await connection();
  await newConnection.collection('recipes')
    .updateOne(
      { _id: imageId },
      { $set: { image: imagePath } },
    );
  const image = await newConnection.collection('recipes').findOne(imageId);
  return image;
};

module.exports = {
  insertRecipe,
  readAllRecipes,
  readRecipe,
  updateRecipe,
  deleteRecipe,
  updateRecipeImage,
};
