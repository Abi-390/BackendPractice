const { body, validationResult } = require("express-validator");

function validate(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  next();
}

const registerValidationRules = [
  body("username")
    .optional()   //with this method username becomes optional user can register only with email pass but if username enters then validation will be still cheked
    .isString()
    .withMessage("Username must be a string")
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters long"),
  body("email").isEmail().withMessage("Invalid email format"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("password must be at least 6 characters long"),
  validate,
];


module.exports = {
    registerValidationRules
}