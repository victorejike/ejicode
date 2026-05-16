const router   = require("express").Router();
const ctrl     = require("../controllers/auth.controller");
const validate = require("../middleware/validate");
const { protect } = require("../middleware/auth");
const {
  registerRules, loginRules, forgotPasswordRules, resetPasswordRules
} = require("../validators/auth.validator");

router.post("/register",        registerRules,       validate, ctrl.register);
router.post("/login",           loginRules,          validate, ctrl.login);
router.post("/refresh-token",                                  ctrl.refreshToken);
router.post("/logout",          protect,                       ctrl.logout);
router.get( "/verify-email/:token",                            ctrl.verifyEmail);
router.post("/forgot-password", forgotPasswordRules, validate, ctrl.forgotPassword);
router.patch("/reset-password/:token", resetPasswordRules, validate, ctrl.resetPassword);
router.get( "/me",              protect,                       ctrl.getMe);

module.exports = router;
