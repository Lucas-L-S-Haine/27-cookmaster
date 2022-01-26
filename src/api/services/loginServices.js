const { login } = require('../models/loginModel');
const { newToken } = require('../auth/validateJWT');
const { identity: newError, loginValidate } = require('../utils/functions');

const regEmail = /\S+@[a-z]{3,}\.[a-z]{3,}/;

const newLoginValidate = async (email, password) => {
  loginValidate(email, password);
  if (!regEmail.test(email)) {
    const message = 'Incorrect username or password';
    throw newError({ status: 401, message });
  }
  const user = await login(email, password);
  const token = await newToken(user);
  return token;
};

module.exports = {
  newLoginValidate,
};
