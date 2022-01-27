const { ObjectId } = require('mongodb');
const connection = require('./connections');

const viewImage = async (id, imagePath) => {
  const imageId = new ObjectId(id);
  const newConnection = await connection();
  const image = await newConnection
    .collection('users').findOneAndUpdate(
      { _id: imageId },
      { $set: { image: imagePath } },
      { returnOriginal: false },
    );
  return image;
};

module.exports = {
  viewImage,
};
