import React from "react";
import SummaryLending from "./SummaryLending";
import { Flex } from "@chakra-ui/react";
import LendingUserInfo from "./LendingUserInfo";
import LendingCardDetails from "./LendingCardDetails";
const LendingPayment = () => {
  return (
    <>
      <Flex h="100vh" bg="#fcfafb" p="0 10%" m="auto">
        <LendingUserInfo />
        <SummaryLending />
      </Flex>
      <LendingCardDetails />
    </>
  );
};

export default LendingPayment;
