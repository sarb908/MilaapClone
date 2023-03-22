const express = require("express");
const cors = require("cors");
const conn = require("./config");
require("dotenv").config();
const passport = require("./googleauth");
const LendRouter = require("./controller/LendController");
const AuthRouter = require("./controller/AuthController");
const CartRouter = require("./controller/CartController");
const PaymentRouter = require("./controller/PaymentController");
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => res.send("homepage"));
app.use("/", AuthRouter);
app.use("/", PaymentRouter);
app.use("/cart", CartRouter);
app.use("/lend", LendRouter);
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    //console.log(req.user);
    //res.send(req.user);
    res.redirect(
      `https://milaap-app-clone.netlify.app/google?token=${req.user.token}&img=${req.user.img}`
    );
  }
);
app.listen(process.env.PORT || 3000, () => {
  conn.then(() => console.log("db connected")).catch((err) => console.log(err));
  console.log("listening at 8080");
});
