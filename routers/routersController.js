const express = require("express");
const { consoleLog } = require("../controllers/test");
const router = express.Router();

// api connect
router.get("/test", consoleLog);

module.exports = router;
