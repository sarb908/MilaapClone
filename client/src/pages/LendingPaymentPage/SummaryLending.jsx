import React from "react";
import { Text, Image, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const SummaryLending = () => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  return (
    <VStack bg="#f5f3f3" p="50px 15px" spacing={"20px"} w="30%">
      <Text fontSize="13px" color="#9f9f9f" fontWeight="400">
        You are lending towards
      </Text>
      <Image w="30%" src={cartItems[0]?.img} />
      <Text fontSize="13px" color="#542e44" fontWeight="500">
        purpose {cartItems[0]["col-md-8"]}
      </Text>
      <Text fontSize="13px" color="#542e44" fontWeight="500">
        <span style={{ color: "#9f9f9f" }}> User Borrower</span>:
        {cartItems[0]["leno-link-label"]}
      </Text>

      <Text fontSize="13px" color="#542e44" fontWeight="500">
        {" "}
        {cartItems.length > 1 ? `&${cartItems.length - 1}  more loans` : ""}
      </Text>
    </VStack>
  );
};

export default SummaryLending;
