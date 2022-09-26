const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "try another email"],
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
