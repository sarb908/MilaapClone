import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getLend } from "../../store/AppReducer/action";

const SingleLend = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const lend = useSelector((store) => store.reducer.lend);
  const [item, setItem] = useState({});

  useEffect(() => {
    if (lend?.length === 0) {
      dispatch(getLend());
    }
  }, [lend?.length, dispatch]);

  useEffect(() => {
    if (id) {
      const temp = lend.find((lend) => lend.id === Number(id));
      temp && setItem(temp);
    }
  }, [lend, id]);


  return (
    <Box>
      <Heading>
        {item["leno-link-label"]} is crowdfunding {item["col-md-8"]}
      </Heading>
      <Flex>
        <Image src={item.img} />
        <Box>
          <Box border={"1px solid #cccccc"}>
            <Text>Lend a little. Change a lot.</Text>
            <Progress />
            <Flex justifyContent="space-between">
              <Stack
                fontSize="sm"
                direction="column"
                textAlign="left"
                color={"#9c3353"}
              >
                <Text>Funded</Text>
                <Text>{item["pull-left"]}</Text>
              </Stack>
              <Stack fontSize="sm" direction="column" textAlign="left">
                <Text>Still Requires</Text>
                <Text>{item["pull-right"]}</Text>
              </Stack>
            </Flex>
            <InputGroup w="230px" size="sm">
              <InputLeftAddon children="₹" />
              <Input type="amount" variant="flushed" />
            </InputGroup>
            <Box>
              <Button>Lend now</Button>
            </Box>
            <Button>Complete the Loan</Button>
          </Box>
          <Text>1 share = $18 in contribution on average</Text>
          <Grid w="100%">
            <Box border={"1px solid #cccccc"}>
              <Text>Like</Text>
            </Box>
            <Box border={"1px solid #cccccc"}>
              <Text>Share</Text>
            </Box>
            <Box border={"1px solid #cccccc"}>
              <Text>Tweet</Text>
            </Box>
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default SingleLend;
