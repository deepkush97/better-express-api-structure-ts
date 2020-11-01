import HttpException from "./HttpException";

export default class NotFoundException extends HttpException {
  constructor(optionalMessage?: string) {
    super(404, optionalMessage || "Not Found");
  }
}
