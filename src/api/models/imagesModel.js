const connection = require('./connections');

const viewImage = async (image) => {
  const newConnection = await connection();
  const newUser = await newConnection
    .collection('users').insertOne(image);
  return newUser;
};

module.exports = {
  viewImage,
};
