import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ImLocation } from "react-icons/im";
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
import { useSelector, useDispatch } from "react-redux";
import { updateCartItemsHandler } from "../../store/CartReducer/action";
const Card = ({ e }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const [item, setItem] = useState({});
  useEffect(() => {
    const temp = cartItems.find((item) => Number(item.id) === Number(e.id));
    setItem(temp);
  }, [cartItems]);

  const handleClick = () => {
    dispatch(updateCartItemsHandler(e));
  };
  return (
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
          display={!!item ? "none" : "block"}
          mt="20px"
          variant="outline"
          borderRadius="25px"
          color={"#9c3353"}
          colorScheme={"#9c3353"}
          size="lg"
          onClick={handleClick}
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
            <InputLeftAddon children="₹" display={!!item ? "none" : "block"} />
            <Input
              type="amount"
              variant="flushed"
              display={!!item ? "none" : "block"}
            />
            <Button
              bg={"#9c3353"}
              color="white"
              w="180px"
              h="38px"
              borderRadius="20px"
              onClick={handleClick}
              isDisabled={!!item}
              _hover={{ bg: "#9c3353", color: "white" }}
            >
              {!!item ? "Added to Basket" : "Lend"}
            </Button>
          </InputGroup>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Card;