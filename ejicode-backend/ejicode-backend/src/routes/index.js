const router = require("express").Router();

router.use("/auth",     require("./auth.routes"));
router.use("/users",    require("./user.routes"));
router.use("/projects", require("./project.routes"));
router.use("/contact",  require("./contact.routes"));
router.use("/services", require("./service.routes"));

module.exports = router;
