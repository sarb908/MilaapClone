const express = require("express");
const { login, signup, authentication } = require("../middlewares/auth");
const AuthRouter = express.Router();

AuthRouter.post("/signup", signup);

AuthRouter.post("/login", login);

module.exports = AuthRouter;
