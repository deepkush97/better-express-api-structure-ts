export default class ResponseModel<T> {
  public data?: T;
  public isSuccess: boolean;
  public message?: string;
  constructor(isSuccess: boolean, data?: T, message?: string) {
    this.isSuccess = isSuccess;
    this.data = data;
    this.message = message;
  }
}
