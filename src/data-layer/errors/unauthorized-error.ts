import { ApiError } from "./api-error";

export class UnauthorizedError extends ApiError {
  constructor(message: string) {
    super(message, 401);
  }
}
