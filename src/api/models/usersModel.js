const connection = require('./connections');

const insertUser = async (user) => {
  const newConnection = await connection();
  const newUser = await newConnection
    .collection('users').insertOne(user);
  return newUser;
};

module.exports = {
  insertUser,
};
