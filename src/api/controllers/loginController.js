const { insertUser } = require('../models/loginModel');

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

module.exports = {
  insert,
};
