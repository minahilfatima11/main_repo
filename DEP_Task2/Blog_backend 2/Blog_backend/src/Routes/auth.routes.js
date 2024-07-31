const express = require("express");
const AuthController = require("../Controllers/auth_controller");

const authRouter = express.Router();
authRouter.post("/login", AuthController.login);
authRouter.post("/register", AuthController.register);
module.exports = authRouter;
