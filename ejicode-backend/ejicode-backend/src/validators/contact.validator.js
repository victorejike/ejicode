const { body } = require("express-validator");

exports.contactRules = [
  body("name").trim().notEmpty().withMessage("Name is required."),
  body("email").isEmail().normalizeEmail().withMessage("Valid email required."),
  body("message").trim().isLength({ min: 10 }).withMessage("Message must be at least 10 characters."),
  body("company").optional({ checkFalsy: true }).trim().isLength({ max: 120 }).withMessage("Company is too long."),
  body("projectType").optional({ checkFalsy: true }).trim().isLength({ max: 120 }).withMessage("Project type is too long."),
  body("budget").optional({ checkFalsy: true }).trim().isLength({ max: 80 }).withMessage("Budget is too long."),
  body("timeline").optional({ checkFalsy: true }).trim().isLength({ max: 80 }).withMessage("Timeline is too long."),
  body("appointmentDate").optional({ checkFalsy: true }).isISO8601().toDate().withMessage("Appointment date must be valid."),
  body("appointmentTime").optional({ checkFalsy: true }).trim().isLength({ max: 40 }).withMessage("Appointment time is too long."),
  body("source").optional({ checkFalsy: true }).isIn(["contact", "booking"]).withMessage("Invalid source."),
];
