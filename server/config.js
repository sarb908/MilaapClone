const mongoose = require("mongoose");
require("dotenv").config();
const conn = mongoose.connect(process.env.MONGOURL);
module.exports = conn;
