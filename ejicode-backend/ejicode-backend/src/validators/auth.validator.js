const { body } = require("express-validator");

exports.registerRules = [
  body("name").trim().notEmpty().withMessage("Name is required."),
  body("email").isEmail().normalizeEmail().withMessage("Valid email required."),
  body("password").isLength({ min: 8 }).withMessage("Password must be at least 8 characters."),
];

exports.loginRules = [
  body("email").isEmail().normalizeEmail().withMessage("Valid email required."),
  body("password").notEmpty().withMessage("Password is required."),
];

exports.forgotPasswordRules = [
  body("email").isEmail().normalizeEmail().withMessage("Valid email required."),
];

exports.resetPasswordRules = [
  body("password").isLength({ min: 8 }).withMessage("Password must be at least 8 characters."),
];
