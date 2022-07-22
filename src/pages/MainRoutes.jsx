import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./ContactUs";
import Donate from "./Donate";
import Lend from "./Lend";
import Pricing from "./Pricing";
import Home from "./Home";

import Signup from "./Signup";

import LendingPayment from "./LendingPaymentPage/LendingPayment";

import SingleLend from "../components/lend/SingleLend";
import SingleDonate from "../components/donate/SingleDonate";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/donate/:id" element={<SingleDonate />} />
      <Route path="/lend" element={<Lend />} />
      <Route path="/lend/:id" element={<SingleLend />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contactUs" element={<ContactUs />} />

      <Route path="/signUp" element={<Signup />} />

      <Route path="/lendingPayment" element={<LendingPayment />} />
    </Routes>
  );
};

export default MainRoutes;
