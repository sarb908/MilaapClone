const express = require("express");
require("dotenv").config();
const { v4: uuidv4 } = require("uuid");
const { authentication } = require("../middlewares/auth");
const CartModel = require("./../models/CartModel");
const Order = require("../models/orderModel");
const UserModel = require("../models/UserModel");

const stripe = require("stripe")(process.env.SECRET_KEY);
const PaymentRouter = express.Router();

PaymentRouter.post(
  "/stripe/create-checkout-session",
  authentication,
  async (req, res) => {
    try {
      const userId = req.body.userId;
      const cartItems = await CartModel.find({ userId });

      await CartModel.deleteMany({ userId });
      const currentUser = await UserModel.findById(userId);

      const line_items = cartItems.map((item) => {
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: item[`leno-link-label`],
              images: [item.img],
              description: item[`truncate`],
              metadata: {
                id: item._id,
              },
            },
            unit_amount: 10000,
          },
          quantity: 1,
        };
      });
      const session = await stripe.checkout.sessions.create({
        line_items,
        mode: "payment",
        success_url: `http://localhost:3000`,
        cancel_url: `http://localhost:3000`,
      });

      res.send({ url: session.url });
    } catch (err) {
      console.log(err);
      return res.status(400).send(err);
    }
  }
);

PaymentRouter.post("/payment", authentication, async (req, res) => {
  try {
    const userId = req.body.userId;
    const cartItems = await CartModel.find({ userId });
    console.log(cartItems);
    await CartModel.deleteMany({ userId });
    const currentUser = UserModel.findById(userId);
    const { token, subTotal } = req.body;
    console.log(req.body, "BODY");
    /////
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.charges.create(
      {
        amount: subTotal * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    if (payment) {
      const newOrder = new Order({
        email: currentUser.email,
        userid: currentUser._id,

        orderAmount: subTotal,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          picode: token.card.address_zip,
        },
        transectionId: payment.source.id,
      });
      newOrder.save();
      res.send("Payment Success");
    } else {
      res.send("Payment Faild");
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Something went wrong",
      error: error.stack,
    });
  }
});

PaymentRouter.post("/getuserorder", async (req, res) => {
  const { userid } = req.body;
  try {
    const orders = await Order.find({ userid }).sort({ _id: "-1" });
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).json({
      message: "Something Went Wront",
      error: error.stack,
    });
  }
});

module.exports = PaymentRouter;
