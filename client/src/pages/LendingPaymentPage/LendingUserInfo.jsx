import React from "react";
import {
  Box,
  Text,
  Flex,
  Image,
  Switch,
  VStack,
  Badge,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import axios from "axios";
const LendingUserInfo = (props) => {
  const { token } = useSelector((state) => state.authReducer);
  const handlePayment = () => {
    axios({
      method: "post",
      url: "https://milaapsarb.onrender.com/stripe/create-checkout-session",

      headers: {
        token: `Bearer ${token}`,
      },
    }).then((r) => {
      console.log(r.data.url);
      alert(r.data.url);
      window.location.href = r.data.url;
    });
  };
  return (
    <Box w="90%" color="white" mt="30px" p="0 30px">
      <Text
        fontSize="14px"
        fontWeight="400"
        bg="#f5f3f3"
        p="14px 15px"
        textAlign={"left"}
        color="#9f9ea3"
        onClick={props.onClick}
      >
        Provide general details
        <ChevronDownIcon w="6" h="6" />
      </Text>
      <VStack
        bg="white"
        align={"stretch"}
        gap="10px"
        shadow={"sm"}
        w="70%"
        p="15px"
        m=" 20px auto"
        textAlign={"left"}
      >
        <Flex
          bg="#9c3353"
          p="0 30px"
          borderRadius={"6px"}
          justifyContent={"space-between"}
          alignItems="center"
          h="60px"
          gap="50px"
        >
          <Flex alignItems={"center"} w="80%" justify={"center"}>
            <Text fontSize={"12px"}>You are lending </Text>

            <Text fontSize={"16px"}> {props.total}</Text>
          </Flex>
          <Image
            h="95%"
            src="https://assets.milaap.org/assets/payment_processor/lend-amount-logo-67e3d66276879590a7691f1261a5b1544152bc695520d9784676a788290b6d1d.png"
          />
        </Flex>

        <Flex
          bg="#fbfbfb"
          border="1px solid #ecedee"
          h="70px"
          alignItems={"center"}
          p="0 20px"
          gap="15px"
        >
          <Box borderRadius="3px" color="#5d5d5d">
            <Text fontSize="14px">Lend Anonymously</Text>
            <Text fontSize="12px">
              Your contribution will be marked anonymous
            </Text>
          </Box>
          <Switch colorScheme="pink" size="lg" />
        </Flex>
        <Flex
          bg="#fbfbfb"
          border="1px solid #ecedee"
          h="70px"
          alignItems={"center"}
          p="0 20px"
          gap="15px"
        >
          <Box borderRadius="3px" color="#5d5d5d">
            <Text fontSize="14px">Use Available Credits</Text>
          </Box>
          <Badge
            p="10px 15px"
            fontWeight="400"
            fontSize="12px"
            borderRadius={"15px"}
          >
            INR 0.0
          </Badge>
          <Switch fill="red" colorScheme="pink" size="lg" />
        </Flex>
        <Flex justify={"end"} gap="70px" border="2px soldi black">
          <Button
            _hover={{ bg: "none", cursor: "pointer" }}
            color={"#9c3353"}
            variant={"ghost"}
            fontWeight={"500"}
          >
            Discard
          </Button>
          <Button
            bg={"#9c3353"}
            _hover={{ bg: "#9c3353", boxShadow: "dark-lg" }}
            size="lg"
            fontWeight={"500"}
            p="0 42px"
            fontSize="14px"
            borderRadius={"20px"}
            onClick={handlePayment}
          >
            Continue
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
};

export default LendingUserInfo;
