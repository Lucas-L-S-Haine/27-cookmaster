const {
  newUserValidate,
} = require('../services/usersServices');

// const { insertUser } = require('../models/usersModel');

const insert = async (req, res, _next) => {
  try {
    const user = { ...req.body, role: 'user' };
    const userData = await newUserValidate(user);
    const data = userData.ops[0];
    const response = { user: {
      name: data.name,
      email: data.email,
      role: data.role,
    } };
    return res.status(201).json(response);
  } catch (err) {
    return res.status(err.status).json({ message: err.message });
  }
};

module.exports = {
  insert,
};
