import { Express } from "express";
import ExpressLoader from "./ExpressLoader";
export default (app: Express) => {
  ExpressLoader(app);
};
