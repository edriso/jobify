import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

router.get('/current-user', userController.getCurrentUser);
router.get('/admin/app-stats', userController.getApplicationStats);
router.patch('/update-user', userController.updateUser);

export default router;
