const handleError = (err, req, res, _next) => {
  if (err.status) return res.status(err.status).json({ message: err.message });
  if (err.joi) {
    return res
      .status(err.status).json({ message: 'Invalid entries. Try again' });
  }
  console.log('middleware', err);
  return res.status(200).json({});
};

module.exports = handleError;
