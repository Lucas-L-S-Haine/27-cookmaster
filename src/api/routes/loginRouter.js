const rescue = require('express-rescue');
const { login } = require('../controllers/loginController');

const loginRouter = (app) => {
  app
    .route('/login')
    .post(rescue(login));
};

module.exports = loginRouter;
