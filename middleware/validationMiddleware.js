import { body, param, validationResult } from 'express-validator';
import mongoose from 'mongoose';
import { BadRequestError } from '../errors/customErrors.js';
import { JOB_STATUS, JOB_TYPE } from '../utils/constants.js';
import User from '../models/userModel.js';

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        // if (errorMessages[0].startsWith('no job')) {
        //   throw new NotFoundError(errorMessages);
        // }
        // if (errorMessages[0].startsWith('not authorized')) {
        //   throw new UnauthorizedError('not authorized to access this route');
        // }
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

//// Added to a separate middleware
// export const validateJobIdAndCheckExistence = withValidationErrors([
//   param('id').custom(async (value) => {
//     const isValidId = mongoose.Types.ObjectId.isValid(value);
//     if (!isValidId) throw new Error('invalid MongoDB id');
//     const job = await Job.findById(value);
//     if (!job) throw new Error(`no job with id ${value}`);
//     const isAdmin = req.user.role === 'admin';
//     const isOwner = req.body.userId === job.createdBy.toString();
//     if (!isAdmin && !isOwner)
//       throw new Error('not authorized to access this route');
//   }),
// ]);

export const validateIdParam = withValidationErrors([
  param('id')
    .custom((value) => mongoose.Types.ObjectId.isValid(value))
    .withMessage('invalid MongoDB id'),
]);

export const validateRegisterInput = withValidationErrors([
  body('name').notEmpty().withMessage('name is required'),
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format')
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) throw new Error('email already exists');
    }),
  body('password')
    .notEmpty()
    .withMessage('password is required')
    .isLength({ min: 8 })
    .withMessage('password must be at least 8 characters long'),
  body('location').notEmpty().withMessage('location is required'),
]);

export const validateLoginInput = withValidationErrors([
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format'),
  body('password').notEmpty().withMessage('password is required'),
]);
