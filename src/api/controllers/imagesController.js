const { viewImage } = require('../models/imagesModel');

const view = async (req, res, next) => {
  try {
    const image = req.body;
    console.log('image', image);
    const response = await viewImage(image);
    return res.status(201).json(response.ops[0]);
  } catch (err) {
    // console.error('Error:', err.message);
    next(err);
  }
};

module.exports = {
  view,
};
