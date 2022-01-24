const Joi = require('joi');
const { login } = require('../models/loginModel');
const { identity: newError } = require('../utils/functions');

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
});
const regEmail = /\S+@[a-z]{3,}\.[a-z]{3,}/;

const loginValidate = async (loginData) => {
  const { error } = loginSchema.validate(loginData);
  if (error) {
    const message = !loginData.password || !loginData.email
      ? 'All fields must be filled' : 'Incorrect username or password';
    throw newError({ status: 401, message });
  }
  if (!regEmail.test(loginData.email)) {
    const message = 'Incorrect username or password';
    throw newError({ status: 401, message });
  }
  const newLogin = await login(loginData);
  return newLogin;
};

module.exports = {
  loginValidate,
};
