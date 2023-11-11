import rateLimit from 'express-rate-limit';

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 15,
  message: { message: 'IP rate limit exceeded, retry in 15 minutes.' },
});

export default rateLimiter;
