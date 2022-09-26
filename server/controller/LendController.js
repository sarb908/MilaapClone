const express = require("express");
const LendModel = require("../models/LendModel");
const { lendGetItems } = require("./../middlewares/lend");
const LendRouter = express.Router();

LendRouter.get("/", lendGetItems);

module.exports = LendRouter;
