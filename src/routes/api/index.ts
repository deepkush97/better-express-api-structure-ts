import { Router } from "express";
import { GetSuccessResponse } from "../../helpers";
import dummy from "./dummy";

export default (router: Router) => {
  const apiRouter = Router();
  /**
   * @swagger
   * /api:
   *  get:
   *      description: API test endpoint
   *      produces:
   *        - application/json
   *      responses:
   *          '200':
   *            description: Returns 'API Index'
   */
  apiRouter.get("/", (req, res) => {
    res.send(GetSuccessResponse("API Index"));
  });
  dummy(apiRouter);
  //Add the imported other routes in here.
  /*
  For example, if there is user routing,
  user(apiRouter)
  The endpoint will be attached onto the passed router object
  */
  router.use("/api", apiRouter);
};
