const express = require("express");
const blogrouter = require("./blog.routes");
const authRouter = require("./auth.routes");
const upload = require("../middleware/upload");

const router = express.Router();
router.use("/blog", blogrouter);
router.use("/auth", authRouter);

module.exports = router;
