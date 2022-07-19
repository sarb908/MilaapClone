import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./ContactUs";
import Donate from "./Donate";
import Lend from "./Lend";
import Pricing from "./Pricing";
import Home from "./Home";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/lend" element={<Lend />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contactUs" element={<ContactUs />} />
    </Routes>
  );
};

export default MainRoutes;
