import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

router.get('/', userController.getCurrentUser);
router.get('/stats', userController.getApplicationStats);
router.get('/update-user', userController.updateUser);

export default router;
