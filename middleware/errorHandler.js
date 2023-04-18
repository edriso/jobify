const errorHandlerMiddleware = (err, req, res, next) => {
  res.status(500).json({ message: 'There was an error' });
  next();
};

export default errorHandlerMiddleware;
