import { ApiError } from "./api-error";

export class DataBaseError extends ApiError {
  constructor(message: string) {
    super(message, 500);
  }
}
