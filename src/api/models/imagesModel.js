const connection = require('./connections');

const viewImage = async (image) => {
  const newConnection = await connection();
//   const newUser = await newConnection
//     .collection('users').insertOne(user);
//   return newUser;
  console.log('aqui é uma imagem');
};

module.exports = {
  viewImage,
};
