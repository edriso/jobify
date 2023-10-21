import { body, validationResult } from 'express-validator';
import { BadRequestError } from '../errors/customErrors.js';
import { JOB_STATUS, JOB_TYPE } from '../utils/constants.js';

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors
          .array()
          .map((error) => error.msg)
          .join(', ');
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateJobInput = withValidationErrors([
  body('company')
    .notEmpty()
    .withMessage('company is required')
    .isLength({ min: 2, max: 50 })
    .withMessage('company should be between 2 and 50 characters long')
    .trim(),
  body('position')
    .notEmpty()
    .withMessage('position is required')
    .isLength({ max: 50 })
    .withMessage('position should be at less than 50 chars')
    .trim(),
  body('jobLocation').notEmpty().withMessage('jobLocation is required'),
  body('jobStatus')
    .isIn(Object.values(JOB_STATUS))
    .withMessage('invalid status value'),
  body('jobType')
    .isIn(Object.values(JOB_TYPE))
    .withMessage('invalid type value'),
]);
