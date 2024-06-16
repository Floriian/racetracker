export class HttpException extends Error {
  public statusCode: number;

  constructor(msg?: string, statusCode = 500) {
    super(msg || 'An error happened');
    this.statusCode = statusCode;
  }
}
