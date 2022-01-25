const jwt = require('jsonwebtoken');
const { identity: newError } = require('../utils/functions');

const secret = 'secret';
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const insertJWT = async (req, res, _next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(200).json({ error: 'Token não encontrado' });
  }
  try {
    const decoded = jwt.verify(token, secret);
    const user = await model.findUser(decoded.data.username);
    if (!user) {
      return res.status(433)
        .json({ message: 'Erro ao procurar usuário do token' });
    }
  req.user = user;
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
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
  validateJWT,
};
