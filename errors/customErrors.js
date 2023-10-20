export class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
    this.name = 'BadRequestError';
  }
}

export class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.status = 404;
    this.name = 'NotFoundError';
  }
}

export class UnauthenticatedError extends Error {
  constructor(message) {
    super(message);
    this.status = 401;
    this.name = 'UnauthenticatedError';
  }
}

export class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.status = 403;
    this.name = 'UnauthorizedError';
  }
}
