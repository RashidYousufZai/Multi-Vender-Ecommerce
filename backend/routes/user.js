const express = require("express");
const { signup, activation, login, loaduser } = require("../controller/user");
const router = express.Router();
const { upload } = require("../multer");
const { isAuthenticated } = require("../middleware/auth");

router.post("/create-user", upload.single("file"), signup);
router.post("/login-user", login);
router.post("/activation", activation);
router.get("/getuser", isAuthenticated, loaduser);

module.exports = router;
