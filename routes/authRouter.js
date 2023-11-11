import express from 'express';
import authController from '../controllers/authController.js';
import {
  validateLoginInput,
  validateRegisterInput,
} from '../middleware/validationMiddleware.js';
import { authRateLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router
  .route('/register')
  .post([authRateLimiter, validateRegisterInput], authController.register);
router
  .route('/login')
  .post([authRateLimiter, validateLoginInput], authController.login);
router.route('/logout').get(authController.logout);

export default router;
