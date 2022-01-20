const Joi = require('joi');
const { insertUser, findUserByEmail } = require('../models/usersModel');

const userSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    role: Joi.string().required(),
});

const newError = (err) => (err);

const newUserValidate = async (user) => {
  const { error } = userSchema.validate(user);
  if (error) {
    console.log(error);
    throw newError({ status: 400, message: 'Invalid entries. Try again.' });
  }
  if (!(await findUserByEmail(user.email))) {
    throw newError({ status: 355, message: error.message });
  }
  const createdUser = await insertUser(user);
  return createdUser;
};
module.exports = {
  newUserValidate,
};
