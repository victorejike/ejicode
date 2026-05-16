const router   = require("express").Router();
const ctrl     = require("../controllers/user.controller");
const { protect, authorize } = require("../middleware/auth");
const upload   = require("../middleware/upload");

router.use(protect);
router.get("/",            authorize("admin"), ctrl.getAllUsers);
router.get("/:id",         authorize("admin"), ctrl.getUserById);
router.patch("/me",                            ctrl.updateMe);
router.post("/me/avatar",  upload.single("avatar"), ctrl.uploadAvatar);
router.delete("/:id",      authorize("admin"), ctrl.deleteUser);

module.exports = router;
