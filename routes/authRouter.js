import express from 'express';
import authController from '../controllers/authController.js';
import {
  validateLoginInput,
  validateRegisterInput,
} from '../middleware/validationMiddleware.js';

const router = express.Router();

router
  .route('/register')
  .post([validateRegisterInput], authController.register);
router.route('/login').post([validateLoginInput], authController.login);
router.route('/logout').get(authController.logout);

export default router;
