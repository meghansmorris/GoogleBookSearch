const router = require("express").Router();
const bookRoutes = require("./books");
const API = require("./../../client/src/utils/API");

// Book routes
router.use("/books", bookRoutes);
router.use("/api/books", API);

module.exports = router;
