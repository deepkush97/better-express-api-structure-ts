import { NextFunction, Request, Response } from "express";
import { HttpException } from "../exceptions";
import { GetErrorResponse } from "../helpers";

export default (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error) {
    if (error instanceof HttpException) {
      response.status(error.status).send(GetErrorResponse(error.message));
    } else {
      response.status(500).send(GetErrorResponse(error.message));
    }
  }
};
