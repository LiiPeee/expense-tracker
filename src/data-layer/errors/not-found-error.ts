import { ApiError } from "./api-error";

export class NotFoundError extends ApiError {
  constructor(message: string) {
    super(message, 404);
  }
}
