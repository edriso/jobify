import express from 'express';
import userController from '../controllers/userController.js';
import { validateUpdateUserInput } from '../middleware/validationMiddleware.js';

const router = express.Router();

router.get('/current-user', userController.getCurrentUser);
router.get('/admin/app-stats', userController.getApplicationStats);
router.patch(
  '/update-user',
  [validateUpdateUserInput],
  userController.updateUser
);

export default router;
