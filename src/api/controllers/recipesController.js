const { insertUser } = require('../models/usersModel');

const insert = async (req, res, next) => {
  try {
    const user = req.body;
    const response = await insertUser(user);
    return res.status(201).json(response.ops[0]);
  } catch (err) {
    // console.error('Error:', err.message);
    next(err);
  }
};

const readAll = () => {};

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
