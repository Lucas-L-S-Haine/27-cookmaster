const connection = require('./connections');

const login = async (loginData) => {
  const newConnection = await connection();
  const { email, password } = loginData;
  const newLogin = await newConnection
    .collection('users').findOne({ email, password });
  return newLogin;
};

module.exports = {
  login,
};
