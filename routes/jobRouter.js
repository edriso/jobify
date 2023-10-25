import express from 'express';
import jobController from '../controllers/jobController.js';
import {
  validateIdParam,
  validateJobInput,
} from '../middleware/validationMiddleware.js';
import CheckJobExistenceMiddleware from '../middleware/CheckJobExistenceMiddleware.js';
import { authenticateUser } from '../middleware/authMiddleware.js';

const router = express.Router();

router
  .route('/')
  .get([authenticateUser], jobController.getAllJobs)
  .post([authenticateUser, validateJobInput], jobController.createJob);
router.route('/stats').get(jobController.showStats);
router
  .route('/:id')
  .get(
    [authenticateUser, validateIdParam, CheckJobExistenceMiddleware],
    jobController.getJob
  )
  .patch(
    [
      authenticateUser,
      validateIdParam,
      CheckJobExistenceMiddleware,
      validateJobInput,
    ],
    jobController.updateJob
  )
  .delete(
    [authenticateUser, validateIdParam, CheckJobExistenceMiddleware],
    jobController.deleteJob
  );

export default router;
