const { loginValidate } = require('../services/loginServices');

const insert = async (req, res, _next) => {
  try {
    const login = req.body;
    const response = await loginValidate(login);
    return res.status(200).json(response.ops[0]);
  } catch (err) {
    return res.status(err.status).json({ message: err.message });
  }
};

module.exports = {
  insert,
};
