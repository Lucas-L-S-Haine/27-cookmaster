const { join } = require('path');
const {
  readAllRecipes,
  updateRecipe,
  updateRecipeImage,
} = require('../models/recipesModel');

const {
  readRecipeValidate,
  newRecipeValidate,
  ownerValidate,
  deletedRecipeValidate,
} = require('../services/recipesServices');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

const insert = async (req, res) => {
  const { name, ingredients, preparation } = req.body;
  const { _id: userId } = req.user;
  const recipe = await newRecipeValidate(
    name, ingredients, preparation, userId,
  );
  return res.status(201).json(recipe);
};

const readAll = async (req, res) => {
  const recipes = await readAllRecipes();
  return res.status(200).json(recipes);
};

const read = async (req, res) => {
  const { id } = req.params;
  const response = await readRecipeValidate(id);
  return res.status(200).json(response);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name, ingredients, preparation } = req.body;
  const { _id: userId, role } = req.user;
  ownerValidate(id, userId, role);
  const recipe = await updateRecipe(id, name, ingredients, preparation);
  return res.status(200).json(recipe);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const { _id: userId, role } = req.user;
  await ownerValidate(id, userId, role);
  await deletedRecipeValidate(id);
  return res.status(204).end();
};

const updateImage = async (req, res) => {
  const { id } = req.params;
  const { filename } = req.file;
  const imagePath = join(`${HOST}:${PORT}`, 'src', 'uploads', filename);
  console.log('image', imagePath);
  const response = await updateRecipeImage(id, imagePath);
  return res.status(200).json(response);
};

module.exports = {
  insert,
  readAll,
  read,
  update,
  remove,
  updateImage,
};
