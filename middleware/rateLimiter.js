import rateLimit from 'express-rate-limit';

const rateLimiter = ({ windowMs, limit, message } = {}) => {
  return rateLimit({
    windowMs: windowMs || 15 * 60 * 1000,
    max: limit || 100,
    message: {
      message: message || 'IP rate limit exceeded, retry in 15 minutes.',
    },
  });
};

export const authRateLimiter = rateLimiter({ limit: 15 });

export default rateLimiter;
