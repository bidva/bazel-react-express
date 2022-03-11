import httpStatus from 'http-status';
import APIError from '../utils/APIError';
import vars from '../config/vars';

/**
 * Error handler. Send stacktrace only during development
 * @public
 */
const handler = (err, req, res) => {
  const response = {
    code: err.status,
    message: err.message || httpStatus[err.status],
    errors: err.errors,
    stack: err.stack,
  };

  if (vars.env !== 'development') {
    delete response.stack;
  }

  res.status(err.status);
  res.json(response);
};
export default handler;

/**
 * If error is not an instanceOf APIError, convert it.
 * @public
 */
export const converter = (err, req, res, next) => {
  if (err instanceof APIError) {
    return handler(err, req, res);
  }

  function convertValidationError(error) {
    return new APIError({
      message: error.toString(),
      errors: error.details,
      status: httpStatus.BAD_REQUEST,
    });
  }

  let convertedError;

  if (err.isJoi) {
    convertedError = convertValidationError(err);
  } else if (err.error && err.error.isJoi) {
    convertedError = convertValidationError(err.error);
  } else {
    convertedError = new APIError({
      message: err.message,
      status: err.status || httpStatus.INTERNAL_SERVER_ERROR,
      stack: err.stack,
    });
  }

  return handler(convertedError, req, res);
};

/**
 * Catch 404 and forward to error handler
 * @public
 */
export const notFound = (req, res, next) => {
  const err = new APIError({
    message: 'Not found',
    status: httpStatus.NOT_FOUND,
  });
  return handler(err, req, res);
};
