import React from "react";
import { Select, Box, Text, HStack, Button } from "@chakra-ui/react";
import { TbArrowsDownUp } from "react-icons/tb";

const LendSort = () => {
  return (
    <Box>
      <HStack>
        <Box width="100px">
          <Text fontWeight={"semibold"}>Sort by</Text>
        </Box>
        <Select borderRadius={"25px"} size="sm">
          <option>Popularity</option>
          <option>Expiry</option>
          <option>Pending amount</option>
          <option>Recent</option>
          <option>Interest rate</option>
        </Select>
        <Button borderRadius={"20px"} size="sm" bg="white" variant={"outline"}>
          <TbArrowsDownUp style={{ color: "#333333", width: "25px" }} />
        </Button>
      </HStack>
    </Box>
  );
};

export default LendSort;
