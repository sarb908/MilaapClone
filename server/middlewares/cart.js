const CartModel = require("../models/CartModel");

const getCartItems = async (req, res) => {
  try {
    const userId = req.body.userId;
    const cartItems = await CartModel.find({ userId });
    return res.status(200).send(cartItems);
  } catch (err) {
    return res.status(400).send(err);
  }
};

const cartPostItems = async (req, res) => {
  try {
    const item = req.body;

    let CartItem = new CartModel(item);
    let r = await CartItem.save();
    return res.status(200).send(r);
  } catch (err) {
    return res.status(400).send(err);
  }
};
const cartDeleteItems = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("idparams", id);
    let r = await CartModel.findOneAndDelete({ _id: id });

    return res.status(200).send(r);
  } catch (err) {
    return res.status(400).send(err);
  }
};
const cartPatchItems = async (req, res) => {
  try {
    const { id } = req.params;
    const item = req.body;
    let r = await CartModel.findOneAndUpdate({ _id: id }, item);
    return res.status(200).send("success");
  } catch (err) {
    return res.status(400).send(err);
  }
};
module.exports = {
  getCartItems,
  cartDeleteItems,
  cartPatchItems,
  cartPostItems,
};
