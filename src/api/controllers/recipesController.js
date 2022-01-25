const {
  readAllRecipes,
} = require('../models/recipesModel');

const {
} = require('../services/recipesServices');

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
  const recipes = await readAllRecipes();
  return res.status(200).json(recipes);
};

const read = async (req, res) => {
  const { id } = req.params;
  const response = await readRecipeValidate(id);
  return res.status(200).json(response);
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
