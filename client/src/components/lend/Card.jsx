import React, { useEffect, useState } from "react";
import { ImLocation } from "react-icons/im";
import {
  Box,
  Image,
  Progress,
  Flex,
  Text,
  Stack,
  Link,
  Button,
  InputLeftAddon,
  InputGroup,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { updateCartItemsHandler } from "../../store/CartReducer/action";

const Card = ({ e }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const { isAuth, token } = useSelector((state) => state.authReducer);
  const toast = useToast();
  const [fund, setFund] = useState(e.required_price);
  const [item, setItem] = useState({});
  useEffect(() => {
    const temp = cartItems.find((item) => item._id === e._id);

    setItem(temp);
  }, [cartItems, e.id]);
  const handleChange = (event) => {
    if (event.target.value > e.required_price) {
      toast({
        title: `Amount must be less than ${e.required_price}`,
        status: "error",
        isClosable: true,
      });
      return;
    }
    setFund(event.target.value);
  };
  const handleClick = () => {
    if (isAuth) {
      dispatch(updateCartItemsHandler({ ...e, required_price: fund }, token));
    } else {
      toast({
        title: `Please Login`,
        status: "error",
        isClosable: true,
      });
    }
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
            value={(e.funded_price * 100) / (e.funded_price + e.required_price)}
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
      <Box textAlign="left" ml="25px" w={400}>
        <Stack direction="column">
          <Text fontSize="2xl" color={"#9c3353"}>
            {e["leno-link-label"]}
          </Text>

          <Stack direction="row">
            <ImLocation style={{ color: "gray", marginTop: "5px" }} />
            <Text color="gray">{e.location}</Text>
          </Stack>
          <Text fontSize="13px">Purpose {e["col-md-8"]}</Text>
          <Text fontSize="13px">
            {e.truncate}
            <Link color={"#9c3353"}>Read more</Link>
          </Text>
          <InputGroup w="230px" size="sm">
            <InputLeftAddon children="₹" display={!!item ? "none" : "block"} />
            <Input
              type="amount"
              variant="flushed"
              value={fund}
              onChange={handleChange}
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
