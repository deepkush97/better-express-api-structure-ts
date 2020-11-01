import { ResponseModel } from "../models";

export default <T>(data: T) => {
  return new ResponseModel<T>(true, data);
};
