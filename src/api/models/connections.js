require('dotenv').config();
const mongoClient = require('mongodb').MongoClient;

const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/Cookmaster`;
const DB_NAME = 'Cookmaster';

const dbConnection = () => (
  mongoClient
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((connection) => connection.db(DB_NAME))
    .catch((err) => {
      console.error(err.message);
      process.exit(1);
    })
);

module.exports = dbConnection;
