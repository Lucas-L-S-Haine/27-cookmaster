const Joi = require('joi');
const { insertLogin } = require('../models/loginModel');

const newError = (err) => (err);

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

const loginValidate = async (login) => {
  const { error } = loginSchema.validate(login);
  if (error) {
    throw newError({ status: 401, message: 'All fields must be filled' });
  }
  const newLogin = await insertLogin(login);
  return newLogin;
};

module.exports = {
  loginValidate,
};
