const connection = require('./connections');

const insertUser = async (name, email, password, role) => {
  const newConnection = await connection();
  const newUser = await newConnection
    .collection('users').insertOne({ name, email, password, role });
  return newUser;
};

const findUserByEmail = async (email) => {
  const newConnection = await connection();
  const user = await newConnection
    .collection('users').findOne({ email });
  return user;
};

module.exports = {
  insertUser,
  findUserByEmail,
};
