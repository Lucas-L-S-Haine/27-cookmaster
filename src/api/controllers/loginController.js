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
    const userData = response.ops[0];
    const { _id: id, email } = userData;
    const payload = {
      _id: id,
      email,
      role: 'user',
    };
    const token = jwt.sign(payload, secret, jwtConfig);
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(err.status).json({ message: err.message });
  }
};

module.exports = {
  insert,
};
