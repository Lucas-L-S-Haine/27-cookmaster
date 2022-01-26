const connection = require('./connections');

const login = async (email, password) => {
  try {
    const newConnection = await connection();
    const newLogin = await newConnection
      .collection('users').findOne({ email, password });
    return newLogin;
  } catch (err) {
    console.log('model', err);
    throw err;
  }
};

module.exports = {
  login,
};
