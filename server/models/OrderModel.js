const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "email is required"],
    },
    userid: {
      type: String,
    },

    shippingAddress: {
      type: Object,
    },
    orderAmount: {
      type: String,
      //   required: true,
    },
    isDeliverd: {
      type: Boolean,
      default: false,
    },
    transectionId: {
      type: String,
      //   required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
