import express from 'express';
import authController from '../controllers/authController.js';

const router = express.Router();

router.route('/register').post(authController.register);
router.route('/login').post(authController.login);
router.route('/updateUser').patch(authController.updateUser);

export default router;
