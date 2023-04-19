import CustomAPIError from './customAPI.js';

class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.status = 404;
  }
}

export default NotFoundError;
