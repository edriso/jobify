import { CustomAPIError } from './customAPI.js';

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

export { BadRequestError };
