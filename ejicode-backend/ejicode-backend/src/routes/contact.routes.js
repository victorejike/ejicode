const router   = require("express").Router();
const ctrl     = require("../controllers/contact.controller");
const { protect, authorize } = require("../middleware/auth");
const validate = require("../middleware/validate");
const { contactRules } = require("../validators/contact.validator");

router.post("/",              contactRules, validate, ctrl.submitContact);
router.get( "/",              protect, authorize("admin"), ctrl.getContacts);
router.patch("/:id/status",   protect, authorize("admin"), ctrl.updateStatus);

module.exports = router;
