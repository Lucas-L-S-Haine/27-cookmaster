const { insertUser, findUserByEmail } = require('../models/usersModel');
const {
  identity: newError,
  root,
  userValidate,
} = require('../utils/functions');

const newUserValidate = async (name, email, password, role) => {
  userValidate(name, email, password);
  if (await findUserByEmail(email)) {
    throw newError({ status: 409, message: 'Email already registered' });
  }
  const createdUser = await insertUser(name, email, password, role);
  return createdUser;
};

const adminValidate = async (name, email, password, role) => {
  root(role);
  const userData = await insertUser(name, email, password, role);
  return userData;
};

module.exports = {
  newUserValidate,
  adminValidate,
};
