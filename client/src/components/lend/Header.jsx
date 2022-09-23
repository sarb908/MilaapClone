import { Heading,Box } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Box textAlign="left" margin="20px">
      <Heading fontWeight="" fontSize="30px">
        You can help a family fundraise for a better life. Make a loan.
      </Heading>
      <Heading fontWeight="semibold" fontSize="18px" color={"#999ba6"}>
        Select a loan you feel the most for, based on the cause, geography or
        the fundraising need.
      </Heading>
    </Box>
  );
};

export default Header;
