import express from 'express';
import authController from '../controllers/authController.js';
import { validateRegisterInput } from '../middleware/validationMiddleware.js';

const router = express.Router();

router
  .route('/register')
  .post([validateRegisterInput], authController.register);
router.route('/login').post(authController.login);
router.route('/updateUser').patch(authController.updateUser);

export default router;
