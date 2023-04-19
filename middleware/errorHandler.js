const errorHandlerMiddleware = (err, req, res, next) => {
  const defaultError = {
    status: 500,
    message: 'Something went wrong!',
  };

  if (err.name === 'ValidationError') {
    defaultError.status = 400;
    defaultError.message = Object.values(err.errors)
      .map((elm) => elm.message)
      .join(', ');
  }

  if (err.code && err.code === 11000) {
    defaultError.status = 400;
    defaultError.message = `${Object.keys(err.keyValue)} is already in use`;
  }

  // res.status(defaultError.status).json({ message: err });
  res.status(defaultError.status).json({ message: defaultError.message });
};

export default errorHandlerMiddleware;
