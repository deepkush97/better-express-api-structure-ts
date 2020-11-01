import HttpException from "./HttpException";

export default class BadRequestException extends HttpException {
  constructor(optionalMessage?: string) {
    super(400, optionalMessage || "Bad Request");
  }
}
