const { insertLogin } = require('../models/loginModel');

const insert = async (req, res, next) => {
  try {
    const user = req.body;
    const response = await insertLogin(user);
    return res.status(200).json(response.ops[0]);
  } catch (err) {
    // console.error('Error:', err.message);
    next(err);
  }
};

module.exports = {
  insert,
};
