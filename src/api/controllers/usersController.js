const {
  newUserValidate,
} = require('../services/usersServices');

// const { insertUser } = require('../models/usersModel');

const insert = async (req, res, _next) => {
  try {
    const user = req.body;
    console.log('controller', user);
    const response = await newUserValidate(user);
    return res.status(201).json(response.ops[0]);
  } catch (err) {
    // console.error('Error:', err.message);
    console.log(err);
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }
};

module.exports = {
  insert,
};
