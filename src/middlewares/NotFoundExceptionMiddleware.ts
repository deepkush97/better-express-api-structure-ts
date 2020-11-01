import { NextFunction, Request, Response } from "express";
import { NotFoundException } from "../exceptions";

export default (request: Request, response: Response, next: NextFunction) => {
  next(new NotFoundException());
};
