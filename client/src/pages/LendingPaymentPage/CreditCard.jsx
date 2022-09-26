import {
  Box,
  Input,
  Stack,
  Popover,
  Button,
  PopoverArrow,
  PopoverCloseButton,
  Text,
  VStack,
  Flex,
  useToast,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverHeader,
} from "@chakra-ui/react";
import React, { useState } from "react";
let initState = {
  cardNumber: "",
  expiryMonth: "",
  expiryYear: "",
  cardName: "",
  cvv: "",
};
//////// SETTING LOCAL STORAGE
localStorage.setItem(
  "savedPaymentDetails",
  JSON.stringify({
    cardNumber: "1234567891234567",
    expiryMonth: "01",
    expiryYear: "24",
    cardName: "milaap",
    cvv: "123",
  })
);
const CreditCard = (props) => {
  const [cardPaymentDetails, setCardPaymentDetails] = useState(initState);
  const toast = useToast();
  //////// HANDLING ON CHANGE
  const handleOnChange = (e) => {
    let { name, value } = e.target;

    if (name === "cvv") {
      if (value.length > 3) {
        return;
      } else {
        setCardPaymentDetails({
          ...cardPaymentDetails,
          [name]: value,
        });
      }
    } else if (name === "expiryMonth" || name === "expiryYear") {
      if (value.length > 2) {
        return;
      } else {
        setCardPaymentDetails({
          ...cardPaymentDetails,
          [name]: value,
        });
      }
    } else if (name === "cardNumber") {
      if (value.length > 16) {
        return;
      } else {
        setCardPaymentDetails({
          ...cardPaymentDetails,
          [name]: value,
        });
      }
    } else {
      setCardPaymentDetails({
        ...cardPaymentDetails,
        [name]: value,
      });
    }
  };

  //////// HANDLING ON SUBMIT

  const handleSubmitPayment = () => {
    let savedPaymentDetails = JSON.parse(
      localStorage.getItem("savedPaymentDetails")
    );
    if (
      savedPaymentDetails.cardNumber === cardPaymentDetails.cardNumber &&
      savedPaymentDetails.cvv === cardPaymentDetails.cvv
    ) {
      toast({
        title: `payment successful`,
        description: "",
        status: "success",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
      // navigate("/checkout/otp");
    } else {
      toast({
        title: `Please Enter Valid Card Details`,
        description: "",
        status: "warning",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <>
      <Box mb="25px">
        <div>
          <Flex justifyContent={"space-between"}>
            <p
              align="left"
              style={{
                color: "grey",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Card number
            </p>
            <Popover>
              <PopoverTrigger>
                <Button size="sm">Demo Card Details</Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader fontWeight={600}>
                  Card Details for Demo
                </PopoverHeader>

                <PopoverBody>
                  <Flex gap={3} justifyContent="center">
                    <Box
                      justifyContent={"flex-end"}
                      textAlign={"right"}
                      fontWeight={500}
                    >
                      <Text>Card Number:</Text>
                      <Text>Expiry (MM/YY):</Text>
                      <Text>CVV :</Text>
                      <Text>Name :</Text>
                    </Box>
                    <Box justifyContent={"flex-start"} textAlign={"left"}>
                      <Text> 1234567891234567</Text>
                      <Text> 01/24</Text>
                      <Text> 123</Text>
                      <Text> Anything</Text>
                    </Box>
                  </Flex>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
          <Stack spacing={3} mb="40px">
            <Input
              variant="flushed"
              width="50%"
              focusBorderColor="#9c3353"
              onChange={(e) => handleOnChange(e)}
              value={cardPaymentDetails.cardNumber}
              name="cardNumber"
              placeholder="Card Number"
            />
          </Stack>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "25px",
          }}
        >
          <div>
            <p
              align="left"
              style={{
                color: "grey",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Expiry (MM/YY)
            </p>
            <div
              spacing={3}
              style={{
                marginLeft: "0",
                display: "flex",
                width: "70%",
                justifyContent: "space-between",
              }}
            >
              <Input
                variant="flushed"
                width="40%"
                focusBorderColor="#9c3353"
                onChange={(e) => handleOnChange(e)}
                name="expiryMonth"
                placeholder="MM"
                value={cardPaymentDetails.expiryMonth}
              />

              <Input
                placeholder="YY"
                variant="flushed"
                width="40%"
                focusBorderColor="#9c3353"
                onChange={(e) => handleOnChange(e)}
                name="expiryYear"
                value={cardPaymentDetails.expiryYear}
              />
            </div>
          </div>
          <div>
            <p
              align="left"
              style={{
                color: "grey",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              CVV
            </p>
            <Stack spacing={3}>
              <Input
                variant="flushed"
                width="100%"
                focusBorderColor="#9c3353"
                onChange={(e) => handleOnChange(e)}
                name="cvv"
                placeholder="XXX"
                value={cardPaymentDetails.cvv}
              />
            </Stack>
          </div>
        </div>
        <div mb="25px">
          <p
            align="left"
            style={{
              color: "grey",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            Card name
          </p>
          <Stack spacing={3} mb="40px">
            <Input
              variant="flushed"
              width="50%"
              focusBorderColor="#9c3353"
              onChange={(e) => handleOnChange(e)}
              name="cardName"
              value={cardPaymentDetails.cardName}
            />
          </Stack>
        </div>
      </Box>
      <Flex
        w="100%"
        position="absolute"
        bottom="0"
        h="90px"
        borderTopLeftRadius={"15px"}
        borderTopRightRadius={"15px"}
        bg="#9c3353"
        color="white"
        justifyContent={"space-between"}
        p="0 30px"
        alignItems={"center"}
      >
        <VStack>
          <Text textAlign={"left"} fontSize={"12px"} fontWeight="400">
            You are paying
          </Text>
          <Text fontSize={"18px"} fontWeight="400">
            ₹(INR){props.total}
          </Text>
        </VStack>
        <Flex gap="40px" alignItems={"center"}>
          <Button
            fontSize={"14px"}
            fontWeight="400"
            variant={"ghost"}
            _hover={{
              bg: "#9c3353",
              color: "white",
              textDecoration: "underline",
            }}
          >
            Discard
          </Button>
          <Button
            fontSize={"14px"}
            bg="white"
            color="#9c3353"
            fontWeight="500"
            size={"lg"}
            borderRadius="15px"
            onClick={handleSubmitPayment}
          >
            Continue
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default CreditCard;
