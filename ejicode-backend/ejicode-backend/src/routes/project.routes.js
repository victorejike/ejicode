const router   = require("express").Router();
const ctrl     = require("../controllers/project.controller");
const { protect, authorize } = require("../middleware/auth");
const upload   = require("../middleware/upload");
const validate = require("../middleware/validate");
const { createProjectRules } = require("../validators/project.validator");

router.get("/",                                              ctrl.getProjects);
router.get("/:id",                                           ctrl.getProject);
router.post(  "/", protect, authorize("admin"), createProjectRules, validate, ctrl.createProject);
router.patch( "/:id", protect, authorize("admin"),           ctrl.updateProject);
router.post(  "/:id/cover", protect, authorize("admin"), upload.single("cover"), ctrl.uploadCover);
router.delete("/:id", protect, authorize("admin"),           ctrl.deleteProject);

module.exports = router;
