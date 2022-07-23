import React, { useState, useEffect } from "react";
import SummaryLending from "./SummaryLending";
import { Flex } from "@chakra-ui/react";
import LendingUserInfo from "./LendingUserInfo";
import { useSelector } from "react-redux";

import LendingCardDetails from "./LendingCardDetails";
const LendingPayment = () => {
  const [state, setState] = useState(false);
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const temp = cartItems.reduce((acc, item) => {
      return acc + Number(item.required_price);
    }, 0);
    setTotal(temp.toFixed(2));
  }, [cartItems]);

  const handleClick = () => {
    setState((prev) => {
      return !prev;
    });
  };
  return (
    <>
      <Flex h="100vh" bg="#fcfafb" p="0 10%" m="auto">
        {!state && (
          <LendingUserInfo total={total} state={state} onClick={handleClick} />
        )}

        {state && (
          <LendingCardDetails
            total={total}
            state={state}
            onClick={handleClick}
          />
        )}
        <SummaryLending />
      </Flex>
    </>
  );
};

export default LendingPayment;
