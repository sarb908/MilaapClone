import React from "react";
import LendFilter from "../components/lend/LendFilter";
import Header from "../components/lend/Header";
import { Flex, Box } from "@chakra-ui/react";
import LendItems from "../components/lend/LendItems";
import Footer from "../components/Footer";

const Lend = () => {
  return (
    <>
      <Box w={["50vw", "90vw", "90vw", "80vw", "80vw", "60vw"]} margin="auto">
        <Header />
        <Flex
          justifyContent="space-between"
          flexDirection={["column", "column", "column", "column", "row", "row"]}
          mt="50px"
        >
          <LendFilter />
          <Box width="70vw">
            <LendItems />
          </Box>
        </Flex>
      </Box>
      <Footer />
    </>
  );
};

export default Lend;
