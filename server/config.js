const mongoose = require("mongoose");

const conn = mongoose.connect(`mongodb://localhost:27017/milaap`);
module.exports = conn;
