import { ResponseModel } from "../models";

export default (message: string) => {
  return new ResponseModel<undefined>(false, undefined, message);
};
