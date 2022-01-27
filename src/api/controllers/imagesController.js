const { join } = require('path');
const { viewImage } = require('../models/imagesModel');

const view = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { filename } = req.file;
    console.log(id, filename);
    const imagePath = join('localhost:3000', '..', 'src', 'uploads', filename);
    const response = await viewImage(id, imagePath);
    return res.status(201).json(response.ops[0]);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  view,
};
