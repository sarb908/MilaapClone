import React from "react";
import { Flex } from "@chakra-ui/react";
import LendSort from "./LendSort";
import LendCard from "./LendCard";

const LendItems = () => {
  return (
    <Flex
      flexDirection="column"
      w={[300, 400, 600, 700, 750, 700]}
      margin="auto"
    >
      <Flex justifyContent={"right"}>
        <LendSort />
      </Flex>
      <LendCard />
    </Flex>
  );
};

export default LendItems;
