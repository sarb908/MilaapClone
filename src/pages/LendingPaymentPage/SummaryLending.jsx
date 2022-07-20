import React from "react";
import { Text, Image, VStack } from "@chakra-ui/react";
const SummaryLending = () => {
  return (
    <VStack bg="#f5f3f3" p="50px 15px" spacing={"20px"} w="30%">
      <Text fontSize="13px" color="#9f9f9f" fontWeight="400">
        You are lending towards
      </Text>
      <Image
        w="30%"
        src="https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_60,w_80/v1656735408/production/images/loan/a020o000016LGc9AAG-IMG-20201020-WA0010_1656735407.jpg"
      />
      <Text fontSize="13px" color="#542e44" fontWeight="500">
        to purchase rice, dal, sugar, potato,etc in order to expand grocery
        business.
      </Text>
      <Text fontSize="13px" color="#542e44" fontWeight="500">
        <span style={{ color: "#9f9f9f" }}> User Borrower</span>: Sabina Bibi
        And Group
      </Text>

      <Text fontSize="13px" color="#542e44" fontWeight="500">
        {" "}
        & 3 more loans
      </Text>
    </VStack>
  );
};

export default SummaryLending;
