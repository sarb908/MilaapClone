const express = require("express");
const conn = require("./config");
const LendRouter = require("./controller/LendController");
const app = express();

app.use(express.json());

app.use("/lend", LendRouter);
app.get("/", (req, res) => res.send("Homepage"));

app.listen(8080, () => {
  conn.then(() => console.log("db connected")).catch((err) => console.log(err));
  console.log("listening at 8080");
});
