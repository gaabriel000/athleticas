import { AppError } from './AppError.ts';

interface IValidationError {
  field: string;
  message: string;
}

export class ValidationError extends AppError {
  public readonly errors: IValidationError[];

  constructor(errors: IValidationError[], message = 'errors.validation_failed') {
    super(message, 400);
    this.errors = errors;
  }
}