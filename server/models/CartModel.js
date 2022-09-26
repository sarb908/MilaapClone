const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  btn: String,
  "btn 2": String,
  "form-group href": String,
  img: String,
  "pull-left": String,
  "pull-right": String,
  "leno-link-label": String,
  "sr-only": String,
  location: String,
  "col-md-8": String,
  "col-md-8 2": String,
  truncate: String,
  "sr-only 2": String,
  "help-block": String,
  "help-block 2": String,
  "help-block 3": String,
  "help-block 4": String,
  funded_price: Number,
  required_price: Number,
  cause: String,
  state: String,
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});
const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;
