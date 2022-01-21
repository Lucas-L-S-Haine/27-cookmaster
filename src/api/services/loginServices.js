const Joi = require('joi');
const { insertLogin } = require('../models/loginModel');

const newError = (err) => (err);

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
});
const regEmail = /\S+@[a-z]{3,}\.[a-z]{3,}/;

const loginValidate = async (login) => {
  const { error } = loginSchema.validate(login);
  if (error) {
    const message = !login.password || !login.email
      ? 'All fields must be filled' : 'Incorrect username or password';
    throw newError({ status: 401, message });
  }
  if (!regEmail.test(login.email)) {
    const message = 'Incorrect username or password';
    throw newError({ status: 401, message });
  }
  const newLogin = await insertLogin(login);
  return newLogin;
};

module.exports = {
  loginValidate,
};
