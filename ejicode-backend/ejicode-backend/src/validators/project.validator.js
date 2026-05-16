const { body } = require("express-validator");

exports.createProjectRules = [
  body("title").trim().notEmpty().withMessage("Project title is required."),
  body("description").trim().notEmpty().withMessage("Description is required."),
];
