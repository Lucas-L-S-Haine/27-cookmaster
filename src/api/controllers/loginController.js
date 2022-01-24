const jwt = require('jsonwebtoken');

const secret = 'secret';
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const { loginValidate } = require('../services/loginServices');

const login = async (req, res, _next) => {
  try {
    const loginData = req.body;
    const userData = await loginValidate(loginData);
    const { _id: id, email, role } = userData;
    const payload = {
      _id: id,
      email,
      role,
    };
    const token = jwt.sign(payload, secret, jwtConfig);
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(err.status).json({ message: err.message });
  }
};

module.exports = {
  login,
};
