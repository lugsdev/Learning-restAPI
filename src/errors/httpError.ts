export class HTTPError extends Error {
  constructor(message: string, public statusCode = 400) {
    super(message);
  }
}
