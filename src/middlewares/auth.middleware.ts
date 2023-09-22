import { Request, Response, NextFunction } from 'express';
import { API_KEY } from '../configs/env.config';
import responseUtils from '../utils/response.utils';

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (
      !req.headers.authorization ||
      !req.headers.authorization.startsWith('Bearer ')
    ) {
      return responseUtils.badRequestResponse(
        res,
        'API key must be provided and must be a bearer token'
      );
    }
    const apiKey = req.headers.authorization.split(' ')[1];
    if (apiKey !== API_KEY) {
      return responseUtils.badRequestResponse(res, 'Invalid API key provided');
    }

    return next();
  } catch (error: any) {
    return responseUtils.errorResponse(res, error.message);
  }
};
