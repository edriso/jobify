import { body, validationResult } from 'express-validator';
import { BadRequestError } from '../errors/customErrors.js';

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        // .join(', ');
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateJob = withValidationErrors([
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
]);
