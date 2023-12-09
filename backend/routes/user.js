const express = require("express");
const { signup } = require("../controller/user");
const router = express.Router();
const { upload } = require("../multer");
router.post("/create-user", upload.single("file"), signup);

module.exports = router;
