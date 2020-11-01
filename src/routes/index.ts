import { Router } from "express";
import api from "./api";

export default () => {
  const masterRouter = Router();
  api(masterRouter);
  return masterRouter;
};
