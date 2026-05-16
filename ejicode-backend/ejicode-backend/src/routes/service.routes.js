const router  = require("express").Router();
const ctrl    = require("../controllers/service.controller");
const { protect, authorize } = require("../middleware/auth");

router.get("/",         ctrl.getServices);
router.post(  "/",      protect, authorize("admin"), ctrl.createService);
router.patch( "/:id",   protect, authorize("admin"), ctrl.updateService);
router.delete("/:id",   protect, authorize("admin"), ctrl.deleteService);

module.exports = router;
