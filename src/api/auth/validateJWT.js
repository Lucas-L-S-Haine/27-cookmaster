const jwt = require('jsonwebtoken');
const { identity: newError } = require('../utils/functions');

const secret = 'secret';

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
const readJWT = async (req, res, next) => {
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
  next();
  } catch (err) {
    return res.status(404).json({ message: 'recipe not found' });
  }
};
const readAllJWT = async (req, res, next) => {
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
  next();
  } catch (err) {
    console.log('auth', err);
    return res.status(400).json({ message: err.message });
  }
};

module.exports = {
  insertJWT,
  readAllJWT,
  readJWT,
};
