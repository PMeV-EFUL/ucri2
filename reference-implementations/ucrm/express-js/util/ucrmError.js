export class UcrmError extends Error{
  constructor(httpStatus,message,ucriErrorCode,description) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.name = "UCRMError";
    this.message = message;
    this.status = httpStatus;
    this.ucriErrorCode = ucriErrorCode;
    if (description) {
      this.description = description;
    }else{
      this.description = message;
    }
  }
};
