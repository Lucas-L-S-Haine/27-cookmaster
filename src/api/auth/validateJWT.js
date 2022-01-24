const jwt = require('jsonwebtoken');
const model = require('../models/usersModel');

const secret = 'secret';

const validateJWT = async (req, res, next) => {
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
    return res.status(333).json({ message: err.message });
  }
};

module.exports = validateJWT;