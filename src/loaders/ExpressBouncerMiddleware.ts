import { NextFunction, Request, Response } from "express";
import TooManyRequestsException from "../exceptions/ TooManyRequestsException";

const expressBouncer = require("express-bouncer");
const bouncer = expressBouncer();

bouncer.blocked = (
  req: Request,
  res: Response,
  next: NextFunction,
  remaining: number
) => {
  throw new TooManyRequestsException(
    `Too many requests have been made, please wait ${remaining / 1000} seconds`
  );
};

export default bouncer.block;
