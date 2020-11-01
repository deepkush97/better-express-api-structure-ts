import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import { GetSuccessResponse } from "../helpers";
import routes from "../routes";
import {
  NotFoundExceptionMiddleware,
  ExceptionMiddleware,
} from "../middlewares";

export default (app: Express) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(morgan("dev"));
  app.use(cookieParser());
  app.use(express.static("public"));
  app.get("/test", (req, res) => {
    res.send(GetSuccessResponse("Hi, Test is successfull"));
  });
  app.use("/", routes());
  app.use(NotFoundExceptionMiddleware);
  app.use(ExceptionMiddleware);
};
