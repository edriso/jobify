import express from 'express';
import jobController from '../controllers/jobController.js';
import {
  validateIdParam,
  validateJobInput,
} from '../middleware/validationMiddleware.js';

const router = express.Router();

router
  .route('/')
  .get(jobController.getAllJobs)
  .post([validateJobInput], jobController.createJob);
router.route('/stats').get(jobController.showStats);
router
  .route('/:id')
  .get([validateIdParam], jobController.getJob)
  .patch([validateIdParam, validateJobInput], jobController.updateJob)
  .delete([validateIdParam], jobController.deleteJob);

export default router;
