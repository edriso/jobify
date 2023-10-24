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
router.route('/updateUser').patch(authController.updateUser);

export default router;
