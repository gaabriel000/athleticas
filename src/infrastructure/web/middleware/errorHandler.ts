import type { Request, Response, NextFunction } from 'express';
import { AppError } from '../express/errors/AppError.ts';
import { ValidationError } from '../express/errors/ValidationError.ts';

export function errorHandler(
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) {
  if (error instanceof ValidationError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
      errors: error.errors,
    });
  }

  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'errors.internal_server_error',
  });
}