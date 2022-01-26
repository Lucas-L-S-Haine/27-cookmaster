const identity = require('./identity');
const validations = require('./validations');

module.exports = {
  identity,
  ...validations,
};
