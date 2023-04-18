const errorHandlerMiddleware = (err, req, res, next) => {
  res.status(500).json({ message: err });
};

export default errorHandlerMiddleware;
