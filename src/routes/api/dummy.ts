import { Router } from "express";
import { BadRequestException } from "../../exceptions";
import { GetSuccessResponse } from "../../helpers";

const lotsOfDummies = [
  { name: "Dummy 1" },
  { name: "Dummy 2" },
  { name: "Dummy 3" },
  { name: "Dummy 4" },
  { name: "Dummy 5" },
  { name: "Dummy 6" },
];

export default (router: Router) => {
  const dummyRouter = Router();
  router.use("/dummy", dummyRouter);

  /**
   * @swagger
   * /api/dummy:
   *  get:
   *      description: Getting list of dummies
   *      produces:
   *        - application/json
   *      responses:
   *          '200':
   *            description: List of dummies
   */
  dummyRouter.get("/", (req, res) => {
    res.send(GetSuccessResponse(lotsOfDummies));
  });

  /**
   * @swagger
   * /api/dummy/{index}:
   *  get:
   *      description: Getting specific dummy
   *      produces:
   *        - application/json
   *      parameters:
   *        - in: path
   *          name: index
   *          required: true
   *          description: Numeric ID of the dummy to retrieve.
   *          schema:
   *            type: integer
   *      responses:
   *          '200':
   *            description: if exists, return dummy object
   *          '400':
   *            description: if not exists, returns bad request
   */
  dummyRouter.get("/:index", (req, res) => {
    if (req.params.index && parseInt(req.params.index) < lotsOfDummies.length)
      res.send(GetSuccessResponse(lotsOfDummies[parseInt(req.params.index)]));
    else
      throw new BadRequestException(
        `Nothing is there for you with this '${req.params.index}'`
      );
  });
};
