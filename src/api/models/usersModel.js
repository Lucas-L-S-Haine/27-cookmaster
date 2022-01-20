const connection = require('./connections');

const insertUser = async (user) => {
  const newConnection = await connection();
  const newUser = await newConnection
    .collection('users').insertOne(user);
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
