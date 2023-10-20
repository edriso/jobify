class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
    this.name = 'BadRequestError';
  }
}

export default BadRequestError;
