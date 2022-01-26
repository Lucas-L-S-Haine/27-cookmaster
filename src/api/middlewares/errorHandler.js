const handleError = (err, req, res, _next) => {
  console.log('middleware', err.message);
  if (err.status) return res.status(err.status).json({ message: err.message });
  return res.status(404).send({ message: 'recipe not found' });
};

module.exports = handleError;
