import { Request, Response, NextFunction } from 'express';

export class CustomError extends Error {
  constructor(
    public statusCode: number,
    public status: boolean,
    public info: string,
    public timestamp: Date,
    public message: string,
  ) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  serializeErrors() {
    return {
      code: this.statusCode,
      status: this.status,
      info: this.info,
      timestamp: this.timestamp.toISOString(),
      message: this.message,
    };
  }
}

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send(err.serializeErrors());
  }

  console.error(err); // Log the error for debugging

  const timestamp = new Date();
  res.status(500).send({
    code: 500,
    status: false,
    info: 'INTERNAL_SERVER_ERROR',
    timestamp: timestamp.toISOString(),
    message: 'Something went wrong',
  });
};
