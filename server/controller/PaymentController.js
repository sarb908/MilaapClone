const express = require("express");
require("dotenv").config();
const { v4: uuidv4 } = require("uuid");
const { authentication } = require("../middlewares/auth");
const CartModel = require("./../models/CartModel");

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
        success_url: `https://milaap-app-clone.netlify.app/`,
        cancel_url: `https://milaap-app-clone.netlify.app/`,
      });

      res.send({ url: session.url });
    } catch (err) {
      console.log(err);
      return res.status(400).send(err);
    }
  }
);

module.exports = PaymentRouter;
