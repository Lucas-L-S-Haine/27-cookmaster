const {
  newUserValidate,
  adminValidate,
} = require('../services/usersServices');

const insert = async (req, res, _next) => {
  try {
    const { name, email, password } = req.body;
    const role = 'user';
    const userData = await newUserValidate(name, email, password, role);
    const data = userData.ops[0];
    const response = { user: {
      name: data.name,
      email: data.email,
      role: data.role,
    } };
    return res.status(201).json(response);
  } catch (err) {
    return res.status(err.status).json({ message: err.message });
  }
};

const createAdmin = async (req, res) => {
  const { name, email, password } = req.body;
  const { role } = req.user;
  const wheel = await adminValidate(name, email, password, role);
  return res.status(201).json({ user: wheel });
};

module.exports = {
  insert,
  createAdmin,
};
