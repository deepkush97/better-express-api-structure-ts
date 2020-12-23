import { Express } from "express";
import ExpressLoader from "./ExpressLoader";
import SwaggerApiLoader from "./SwaggerApiLoader";
export default (app: Express) => {
  SwaggerApiLoader(app);
  ExpressLoader(app);
};
