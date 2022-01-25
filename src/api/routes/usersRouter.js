const rescue = require('express-rescue');
const { insert, createAdmin } = require('../controllers/usersController');
const { validateJWT } = require('../auth/validateJWT');

const usersRouter = (app) => {
  app
    .route('/users')
    .post(rescue(insert));

  app
    .route('/users/admin')
    .post(rescue(validateJWT), rescue(createAdmin));
};

module.exports = usersRouter;
