import React, { useEffect, useState } from "react";
import { Select, Box, Text, HStack, Button } from "@chakra-ui/react";
import { TbArrowsDownUp } from "react-icons/tb";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const LendSort = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const urlSort = searchParams.get("sortBy");
  const [sortBy, setSortby] = useState(urlSort || "");

  const handleSort = (e) => {
    setSortby(e.target.value);
  };

  useEffect(() => {
    if (sortBy) {
      let params = {};
      sortBy && (params.sortBy = sortBy);

      setSearchParams(params);
    }
  }, [dispatch, setSearchParams, sortBy]);

  return (
    <Box>
      <HStack>
        <Box width="100px">
          <Text fontWeight={"semibold"}>Sort by</Text>
        </Box>
        <Select borderRadius={"25px"} size="sm" onChange={handleSort}>
          <option value="desc">Lending Price</option>
          <option value="asc">Increasing</option>
          <option value="desc">Decreasing</option>
        </Select>
        <Button borderRadius={"20px"} size="sm" bg="white" variant={"outline"}>
          <TbArrowsDownUp style={{ color: "#333333", width: "25px" }} />
        </Button>
      </HStack>
    </Box>
  );
};

export default LendSort;
