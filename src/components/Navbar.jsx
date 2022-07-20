import React from "react";
import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CartModal from "./Cart/CartModal";
const Navbar = () => {
  return (
    <Flex justify={"space-around"}>
      <Link to="/">Home</Link>
      <Link to="/donate">Donate</Link>
      <Link to="/lend">Lend</Link>
      <Link to="/pricing">Pricing</Link>
      <Link to="/contactUs">contact us</Link>

      <Link to="/Signup">Signup</Link>

      <CartModal />

    </Flex>
  );
};

export default Navbar;
