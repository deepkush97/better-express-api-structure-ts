import HttpException from "./HttpException";

export default class TooManyRequestsException extends HttpException {
  constructor(optionalMessage?: string) {
    super(429, optionalMessage || "Too Many Request");
  }
}
