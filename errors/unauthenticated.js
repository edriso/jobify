import CustomAPIError from './customAPI.js';

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.status = 401;
  }
}

export default UnauthenticatedError;
