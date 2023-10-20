class UnauthenticatedError extends Error {
  constructor(message) {
    super(message);
    this.status = 401;
    this.name = 'UnauthenticatedError';
  }
}

export default UnauthenticatedError;
