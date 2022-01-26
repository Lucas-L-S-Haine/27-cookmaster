const { newLoginValidate } = require('../services/loginServices');

const login = async (req, res, _next) => {
  try {
    const { email, password } = req.body;
    const token = await newLoginValidate(email, password);
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(err.status).json({ message: err.message });
  }
};

module.exports = {
  login,
};
