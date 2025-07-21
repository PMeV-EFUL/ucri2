export class UcrmError extends Error{
  constructor(httpStatus,message) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.name = "UCRMError";
    this.message = message;
    this.status = httpStatus;
  }
};
