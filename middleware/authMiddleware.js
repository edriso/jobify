import {
  BadRequestError,
  UnauthenticatedError,
  UnauthorizedError,
} from '../errors/customErrors.js';
import { verifyJWT } from '../utils/tokenUtils.js';

export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError('invalid authentication');

  try {
    const { userId, role } = verifyJWT(token);
    const isTestUser = userId === process.env.DEMO_USER_ID;
    req.user = { userId, role, isTestUser };
    next();
  } catch (error) {
    throw new UnauthenticatedError('invalid authentication');
  }
};

export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError('not authorized to access this route');
    }
    next();
  };
};

export const restrictDemoUserAccess = (req, res, next) => {
  if (req.user.isTestUser)
    throw new BadRequestError(
      'Read-only mode. Demo User cannot perform write operations.'
    );
  next();
};
