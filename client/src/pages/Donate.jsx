import {
  Box,
  Flex,
  InputGroup,
  Input,
  Button,
  InputRightElement,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import React, { useEffect } from "react";
import DonateItems from "../components/donate/DonateItems";

import Footer from "../components/Footer";
import { getDonate } from "../store/AppReducer/action";
import { useDispatch } from "react-redux";
const Donate = () => {
  const dispatch = useDispatch();
  const [data, setData] = React.useState("");
  useEffect(() => {
    let debounce = setTimeout(() => {
      dispatch(getDonate(data));
    }, 2000);
    return () => {
      if (debounce) {
        clearTimeout(debounce);
      }
    };
  }, [data]);
  return (
    <Box>
      <Box w="70%" margin="auto">
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            focusBorderColor="#9c3353"
            placeholder="Search by fundraiser name, title, location, cause or other keywords"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Search2Icon color="#9c3353" />
          </InputRightElement>
        </InputGroup>
      </Box>
      <Flex direction="column">
        <DonateItems />
      </Flex>
      <Footer />
    </Box>
  );
};

export default Donate;
