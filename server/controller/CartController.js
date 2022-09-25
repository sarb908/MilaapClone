const express = require("express");
const CartModel = require("../models/CartModel");
const { authentication } = require("./../middlewares/auth");

const CartRouter = express.Router();

CartRouter.get("/", authentication, async (req, res) => {
  try {
    const userId = req.body.userId;
    const cartItems = await CartModel.find({ userId });
    return res.status(200).send(cartItems);
  } catch (err) {
    return res.status(400).send(err);
  }
});
CartRouter.post("/", authentication, async (req, res) => {
  try {
    const item = req.body;

    let CartItem = new CartModel(item);
    let r = await CartItem.save();
    return res.status(200).send(r);
  } catch (err) {
    return res.status(400).send(err);
  }
});

CartRouter.delete("/:id", authentication, async (req, res) => {
  try {
    const { id } = req.params;
    console.log("idparams", id);
    let r = await CartModel.findOneAndDelete({ _id: id });

    return res.status(200).send(r);
  } catch (err) {
    return res.status(400).send(err);
  }
});

CartRouter.patch("/:id", authentication, async (req, res) => {
  try {
    const { id } = req.params;
    const item = req.body;
    let r = await CartModel.findOneAndUpdate({ _id: id }, item);
    return res.status(200).send("success");
  } catch (err) {
    return res.status(400).send(err);
  }
});

module.exports = CartRouter;
