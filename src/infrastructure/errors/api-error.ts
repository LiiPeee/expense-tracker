export class ApiError extends Error {
  public readonly statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class ServerError extends Error {
  constructor(stack: string | undefined) {
    super("Internal server error");
    this.name = "ServerError";
    this.stack = stack;
  }
}
