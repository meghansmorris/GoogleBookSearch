const router = require("express").Router();
const bookRoutes = require("./books");
const googleAPI = require("./googleapi");

// Book routes
router.use("/books", bookRoutes);
router.use("/googleapi", googleAPI );

module.exports = router;
