import React, { useState } from "react";
import {
  Flex,
  Image,
  Text,
  Box,
  Input,
  Badge,
  useToast,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { deleteCartItemsHandler } from "../../store/CartReducer/action";
const CartProducts = (props) => {
  const toast = useToast();
  const [fund, setFund] = useState(props.required_price);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(deleteCartItemsHandler(props.id));
  };
  const handleChange = (event) => {
    if (Number(event.target.value) > Number(props.required_price)) {
      toast({
        title: `Amount must be less than ${props.required_price}`,
        status: "error",
        isClosable: true,
      });
      return;
    }
    setFund(event.target.value);
  };
  return (
    <Flex gap="5px" mb="20px">
      <Flex w="20%">
        <Image h="100%" alt="donate" src={props.img} />
      </Flex>
      <Text
        fontWeight="400"
        fontSize="14px"
        lineHeight="24px"
        color="#5d5d5d"
        minWidth="max-content"
      >
        {props["leno-link-label"]}
      </Text>
      <Box>
        <Flex alignItems={"center"} gap="5px">
          <Badge
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
            fontSize="14px"
            fontWeight={400}
            w="40px"
            h="40px"
            color="#858585"
          >
            $
          </Badge>
          <Input
            size="md"
            variant="flushed"
            focusBorderColor="#94f0ff"
            value={fund}
            onChange={handleChange}
          />
          <SmallCloseIcon
            color="#9c3353"
            fontSize="24px"
            p="5px"
            _hover={{
              color: "#9c3353",
              fontSize: "24px",
              p: "5px",
              borderRadius: "100%",
              textDecoration: "underline",
              boxShadow: "dark-lg",
              cursor: "pointer",
            }}
            onClick={clickHandler}
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default CartProducts;
