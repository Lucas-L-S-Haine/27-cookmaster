const connection = require('./connections');

const login = async (email, password) => {
  const newConnection = await connection();
  const newLogin = await newConnection
    .collection('users').findOne({ email, password });
  return newLogin;
};

module.exports = {
  login,
};
