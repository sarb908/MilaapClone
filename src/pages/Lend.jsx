import React from "react";
import LendFilter from "../components/lend/LendFilter";
import Header from "../components/lend/Header";
import { Flex, Box } from "@chakra-ui/react";
import LendItems from "../components/lend/LendItems";

const Lend = () => {
  return (
    <Box w={["80vw", "80vw", "80vw", "80vw"]} margin="auto">
      <Header />
      <Flex
        justifyContent="space-between"
        flexDirection={["column", "column", "column", "row"]}
        border="1px solid red"
        mt="50px"
      >
        <LendFilter />
        <Box border="1px solid green" width="70vw">
          <LendItems />
        </Box>
      </Flex>
    </Box>
  );
};

export default Lend;
