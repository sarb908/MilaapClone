const express = require("express");
const CartModel = require("../models/CartModel");
const { authentication } = require("./../middlewares/auth");
const {
  getCartItems,
  cartDeleteItems,
  cartPatchItems,
  cartPostItems,
} = require("./../middlewares/cart");
const CartRouter = express.Router();

CartRouter.get("/", authentication, getCartItems);
CartRouter.post("/", authentication, cartPostItems);

CartRouter.delete("/:id", authentication, cartDeleteItems);

CartRouter.patch("/:id", authentication, cartPatchItems);

module.exports = CartRouter;
