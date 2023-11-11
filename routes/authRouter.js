import express from 'express';
import authController from '../controllers/authController.js';
import {
  validateLoginInput,
  validateRegisterInput,
} from '../middleware/validationMiddleware.js';
import rateLimiter from '../middleware/rateLimiter.js';

const router = express.Router();

router
  .route('/register')
  .post([rateLimiter, validateRegisterInput], authController.register);
router
  .route('/login')
  .post([rateLimiter, validateLoginInput], authController.login);
router.route('/logout').get(authController.logout);

export default router;
