const { STATUS_CODES } = require("../../config/status_codes");

// function currying
module.exports = (
  response,
  data = null,
  error = false,
  errorArr = [],
  status
) => {
  let statusCode = STATUS_CODES[status];
  let payload = {
    error,
    errorArr,
    data,
    status: statusCode,
  };
  return response.status(statusCode).json(payload);
};
