// const { recipeValidate } = require('../services/recipesServices');
const { readAllRecipes } = require('../models/recipesModel');

const insert = () => {};

const readAll = async (req, res) => {
  const response = await readAllRecipes();
  console.log(response);
  return res.status(200).json(response);
};

const read = () => {};

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
