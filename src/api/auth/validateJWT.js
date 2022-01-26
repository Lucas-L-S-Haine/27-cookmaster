const jwt = require('jsonwebtoken');
const { identity: newError } = require('../utils/functions');

const secret = 'secret';
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const newToken = async (user) => {
  const payload = user;
  delete payload.password;
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};

const validateJWT = (req, _res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    throw newError({ status: 401, message: 'missing auth token' });
  }
  try {
    jwt.verify(token, secret);
  } catch (err) {
    throw newError({ status: 401, message: 'jwt malformed' });
  }
  const payload = jwt.verify(token, secret);
  req.user = payload;
  next();
};

module.exports = {
  newToken,
  validateJWT,
};
