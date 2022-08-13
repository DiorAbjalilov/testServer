const express = require("express");
const { consoleLog } = require("../controllers/test");
const router = express.Router();

// api connect
router.post("/test", consoleLog);

module.exports = router;
