const {
  recipeValidate, readRecipeValidate,
} = require('../services/recipesServices');
const { readAllRecipes, readRecipe } = require('../models/recipesModel');

const insert = async (req, res) => {
  try {
    const recipeData = req.body;
    const response = await recipeValidate(recipeData);
    return res.status(201).json(response);
  } catch (err) {
    return res.status(err.status).json({ message: err.message });
  }
};

const readAll = async (req, res) => {
  const response = await readAllRecipes();
  return res.status(200).json(response);
};

const read = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await readRecipeValidate(id);
    console.log('controller', response);
    return res.status(200).json(response);
  } catch (err) {
    console.log('controller error', err);
    return res.status(err.status).json({ message: err.message });
  }
};

const update = () => {};

const remove = () => {};

const updateImage = () => {};

module.exports = {
  insert,
  readAll,
  read,
  update,
  remove,
  updateImage,
};
