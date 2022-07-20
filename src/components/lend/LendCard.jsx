import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLend } from "../../store/AppReducer/action";
import {
  Box,
  Image,
  Progress,
  Flex,
  Text,
  Stack,
  Button,
  InputLeftAddon,
  InputGroup,
  Input,
} from "@chakra-ui/react";
import { ImLocation } from "react-icons/im";
import { Link } from "react-router-dom";

const LendCard = () => {
  const dispatch = useDispatch();
  const lend = useSelector((store) => store.reducer.lend);
  console.log(lend);

  useEffect(() => {
    if (lend.length === 0) {
      dispatch(getLend);
    }
  });
  return (
    <Box border="1px solid teal">
      {lend.map((e) => {
        return (
          <Link to={`/lend/${e.id}`}>
            <Flex
              key={e.id}
              padding="20px"
              justifyContent="space-between"
              borderBottom={"1px solid #eeeeee"}
              flexDirection={["column", "column", "row", "row"]}
            >
              <Box w="250px">
                <Box>
                  <Image src={e.img} />
                  <Progress
                    hasStripe
                    isAnimated
                    value={64}
                    colorScheme="whiteAlpha"
                    bg={"#9c3353"}
                    height="24px"
                    borderRadius="3"
                    mt="5px"
                  />
                </Box>
                <Flex justifyContent="space-between">
                  <Stack
                    fontSize="sm"
                    direction="column"
                    textAlign="left"
                    color={"#9c3353"}
                  >
                    <Text>Funded</Text>
                    <Text>{e["pull-left"]}</Text>
                  </Stack>
                  <Stack fontSize="sm" direction="column" textAlign="left">
                    <Text>Still Requires</Text>
                    <Text>{e["pull-right"]}</Text>
                  </Stack>
                </Flex>
                <Button
                  mt="20px"
                  variant="outline"
                  borderRadius="25px"
                  color={"#9c3353"}
                  colorScheme={"#9c3353"}
                  size="lg"
                >
                  {e.btn}
                </Button>
              </Box>
              <Box textAlign="left" ml="25px">
                <Stack direction="column">
                  <Text fontSize="2xl" color={"#9c3353"}>
                    {e["leno-link-label"]}
                  </Text>
                  <Stack direction="row">
                    <ImLocation style={{ color: "gray", marginTop: "5px" }} />
                    <Text color="gray">{e.location}</Text>
                  </Stack>
                  <Text fontSize="sm">Purpose {e["col-md-8"]}</Text>
                  <Text fontSize="sm">{e.truncate}</Text>
                  <InputGroup w="230px" size="sm">
                    <InputLeftAddon children="₹" />
                    <Input type="amount" variant="flushed" />
                    <Button
                      bg={"#9c3353"}
                      color="white"
                      w="180px"
                      h="38px"
                      borderRadius="20px"
                    >
                      Lend
                    </Button>
                  </InputGroup>
                </Stack>
              </Box>
            </Flex>
          </Link>
        );
      })}
    </Box>
  );
};

export default LendCard;
