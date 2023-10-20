import express from 'express';
import jobController from '../controllers/jobController.js';

const router = express.Router();

router.route('/').get(jobController.getAllJobs).post(jobController.createJob);
router.route('/stats').get(jobController.showStats);
router
  .route('/:id')
  .get(jobController.getJob)
  .patch(jobController.updateJob)
  .delete(jobController.deleteJob);

export default router;
