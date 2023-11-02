import express from 'express';
import userController from '../controllers/userController.js';
import { validateUpdateUserInput } from '../middleware/validationMiddleware.js';
import { authorizePermissions } from '../middleware/authMiddleware.js';
import upload from '../middleware/multerMiddleware.js';

const router = express.Router();

router.get('/current-user', userController.getCurrentUser);
router.patch(
  '/update-user',
  [upload.single('avatar'), validateUpdateUserInput],
  userController.updateUser
);
router.get(
  '/admin/app-stats',
  [authorizePermissions('admin')],
  userController.getApplicationStats
);

export default router;
