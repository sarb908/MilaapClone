import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import DonateItems from "../components/donate/DonateItems";
import RefineSearch from "../components/donate/RefineSearch";

const Donate = () => {
  return (
    <Box>
      <Flex direction="column">
        <Box>
          <RefineSearch />
        </Box>
        <DonateItems/>
      </Flex>
    </Box>
  );
};

export default Donate;
