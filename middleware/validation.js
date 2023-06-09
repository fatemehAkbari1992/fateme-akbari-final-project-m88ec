const { AppError } = require("../utils/appError");

const validator = (validation) => {
  return (req, res, next) => {
    console.log("validation");
    const { error } = validation.validate(req.body);

    if (!!error) return next(new AppError(400, error));

    next();
  };
};
module.exports = { validator };
