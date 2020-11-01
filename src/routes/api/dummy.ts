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
  dummyRouter.get("/", (req, res) => {
    res.send(GetSuccessResponse(lotsOfDummies));
  });
  dummyRouter.get("/:index", (req, res) => {
    if (req.params.index && parseInt(req.params.index) < lotsOfDummies.length)
      res.send(GetSuccessResponse(lotsOfDummies[parseInt(req.params.index)]));
    else
      res.send(
        new BadRequestException(
          `Nothing is there for you with this '${req.params.index}'`
        )
      );
  });
};
