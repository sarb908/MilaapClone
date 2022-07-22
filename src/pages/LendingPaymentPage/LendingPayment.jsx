import React, { useState } from "react";
import SummaryLending from "./SummaryLending";
import { Flex } from "@chakra-ui/react";
import LendingUserInfo from "./LendingUserInfo";
import LendingCardDetails from "./LendingCardDetails";
const LendingPayment = () => {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState((prev) => {
      return !prev;
    });
  };
  return (
    <>
      <Flex h="100vh" bg="#fcfafb" p="0 10%" m="auto">
        {!state && <LendingUserInfo state={state} onClick={handleClick} />}

        {state && <LendingCardDetails state={state} onClick={handleClick} />}
        <SummaryLending />
      </Flex>
    </>
  );
};

export default LendingPayment;
