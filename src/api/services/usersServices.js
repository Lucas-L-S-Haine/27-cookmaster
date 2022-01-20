const Joi = require('joi');
const usersModel = require('../models/usersModel');

const userSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
});

const newError = (err) => (err);

const newUserValidate = async (user) => {
  const { error } = userSchema.validate(user);
  if (error) {
    throw newError({ status: 333, message: error.message });
  }
  const createdUser = await usersModel.insertUser(user);
  return createdUser;
};
module.exports = {
  newUserValidate,
};
