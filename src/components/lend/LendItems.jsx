import React from "react";
import { Flex } from "@chakra-ui/react";
import LendSort from "./LendSort";
import LendCard from "./LendCard";

const LendItems = () => {
  return (
    <Flex
      border="1px solid blue"
      flexDirection="column"
      w={[100, 300, 400, 700]}
      margin="auto"
    >
      <Flex border="1px solid yellow" justifyContent={"right"}>
        <LendSort />
      </Flex>
      <LendCard />
    </Flex>
  );
};

export default LendItems;
