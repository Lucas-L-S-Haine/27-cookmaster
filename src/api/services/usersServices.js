const Joi = require('joi');
const { insertUser, findUserByEmail } = require('../models/usersModel');
const { identity: newError } = require('../utils/functions');

const userSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    role: Joi.string().required(),
});

const newUserValidate = async (user) => {
  const { error } = userSchema.validate(user);
  if (error) {
    throw newError({ status: 400, message: 'Invalid entries. Try again.' });
  }
  if (await findUserByEmail(user.email)) {
    throw newError({ status: 409, message: 'Email already registered' });
  }
  const createdUser = await insertUser(user);
  return createdUser;
};
module.exports = {
  newUserValidate,
};
