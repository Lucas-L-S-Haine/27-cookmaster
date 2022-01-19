const connection = require('./connections');

const insertLogin = async (login) => {
  const newConnection = await connection();
  const newLogin = await newConnection
    .collection('users').insertOne(login);
  return newLogin;
};

module.exports = {
  insertLogin,
};
