const jwt = require('jsonwebtoken');

const secret = 'secret';
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const { loginValidate } = require('../services/loginServices');

const insert = async (req, res, _next) => {
  try {
    const login = req.body;
    const response = await loginValidate(login);
    const token = jwt.sign({ login }, secret, jwtConfig);
    console.log(token);
    return res.status(200).json(token);
  } catch (err) {
    return res.status(err.status).json({ message: err.message });
  }
};

module.exports = {
  insert,
};
