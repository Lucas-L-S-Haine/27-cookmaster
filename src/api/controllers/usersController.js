// const {
//   serviceFunction,
// } = require('../services/usersServices');

const { insertUser } = require('../models/usersModel');

const insert = async (req, res, next) => {
  try {
    const user = req.body;
    console.log('controller', user);
    const response = await insertUser(user);
    return res.status(201).json(response.ops[0]);
  } catch (err) {
    // console.error('Error:', err.message);
    console.log(err);
    next(err);
  }
};

module.exports = {
  insert,
};
