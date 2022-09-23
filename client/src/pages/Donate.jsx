import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import DonateItems from "../components/donate/DonateItems";
import RefineSearch from "../components/donate/RefineSearch";
import Footer from "../components/Footer";

const Donate = () => {
  return (

    <Box>
      <Flex direction="column">
        <Box position="absolute" right="250px" >
          <RefineSearch/>
        </Box>
        <DonateItems/>
      </Flex>
    </Box>

  );
};

export default Donate;
