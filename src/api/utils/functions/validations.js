const newError = require('./identity');
const { userSchema, loginSchema, recipeSchema } = require('../schemas');

const userValidate = (name, email, password) => {
  const { error } = userSchema.validate({ name, email, password });
  if (error) {
    throw newError({ status: 400, message: 'Invalid entries. Try again.' });
  }
};

const loginValidate = (email, password) => {
  const { error } = loginSchema.validate({ email, password });
  if (error) {
    const message = !password || !email
      ? 'All fields must be filled' : 'Incorrect username or password';
    throw newError({ status: 401, message });
  }
};

const recipeValidate = (name, ingredients, preparation) => {
  const { error } = recipeSchema.validate({ name, ingredients, preparation });
  if (error) {
    throw newError({ status: 400, message: 'Invalid entries. Try again.' });
  }
};

const validRecipe = (recipe) => {
  if (!recipe) {
    throw newError({ status: 404, message: 'recipe not found' });
  }
};

const root = (role) => {
  if (role !== 'admin') {
    throw newError({
      status: 403,
      message: 'Only admins can register new admins',
    });
  }
};

module.exports = {
  userValidate,
  loginValidate,
  recipeValidate,
  validRecipe,
  root,
};
