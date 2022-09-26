import {
  Box,
  Button,
  Flex,
  Input,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Select,
  Stack,
  VStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    cardName: "fraazo",
    cvv: "123",
  })
);

///////////
const Payment = (props) => {
  const [cardPaymentDetails, setCardPaymentDetails] = useState(initState);
  const toast = useToast();
  //////// HANDLING ON CHANGE
  const navigate = useNavigate();
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
    ////   console.log(cardPaymentDetails);
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
      navigate("/successPayment");
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
  ///////////////
  return (
    <>
      <Box w="100%">
        <Tabs
          variant="unstyled"
          fontSize="14px"
          orientation="vertical"
          display="flex"
        >
          <TabList
            borderRight="2px solid #EEEEEE80"
            width="300px"
            height="auto"
            fontSize="28px"
            color="#1A201E"
            flex-direction="column"
            align="start"
          >
            <Tab
              align="start"
              _selected={{
                color: "black",
                bg: "#EEEEEE80",
                borderRight: "3px solid #9c3353",
              }}
              color="#666666"
              justifyContent="flex-start"
              padding="20px 14px"
              fontSize="14px"
              fontWeight={"400"}
              width="200px"
              height="50px"
            >
              <Flex gap="10px" alignItems={"center"}>
                <Image
                  h="25px"
                  src="https://assets.milaap.org/assets/payment_processor/payment-icons/credit-card-357e531c8b8eae593c07d5562e8278c20bb04c84c00bb10319d4ac46c0daf487.png"
                />
                Debit Cards
              </Flex>
            </Tab>
            <Tab
              align="start"
              _selected={{
                color: "black",
                bg: "#EEEEEE80",
                borderRight: "3px solid #9c3353",
              }}
              color="#666666"
              justifyContent="flex-start"
              padding="20px 14px"
              fontSize="14px"
              fontWeight={"400"}
              width="200px"
              height="50px"
            >
              <Flex gap="10px" alignItems={"center"}>
                <Image
                  h="25px"
                  src="https://assets.milaap.org/assets/payment_processor/payment-icons/credit-card-357e531c8b8eae593c07d5562e8278c20bb04c84c00bb10319d4ac46c0daf487.png"
                />
                Credit Cards
              </Flex>
            </Tab>
            <Tab
              align="start"
              _selected={{
                color: "black",
                bg: "#EEEEEE80",
                borderRight: "3px solid #9c3353",
              }}
              color="#666666"
              justifyContent="flex-start"
              padding="20px 14px"
              fontSize="14px"
              fontWeight={"400"}
              width="200px"
              height="50px"
            >
              <Flex gap="10px" alignItems={"center"}>
                <Image
                  h="15px"
                  w="24px"
                  src="https://assets.milaap.org/assets/payment_processor/payment-icons/amex-card-58dd825fa25c23f6c9d9304372753da17c8f392fd5b909a799a419755be94c7c.png"
                />
                Amex
              </Flex>
            </Tab>
            <Tab
              _selected={{
                color: "#9c3353",
                bg: "#EEEEEE80",
                borderRight: "3px solid #9c3353",
              }}
              color="#666666"
              justifyContent="flex-start"
              padding="20px 14px"
              fontSize="14px"
              width="200px"
              height="50px"
            >
              <Flex gap="10px" alignItems={"center"}>
                <Image
                  h="25px"
                  src="https://assets.milaap.org/assets/payment_processor/payment-icons/netbanking-fb4d743913b15d8d762d6919c3e60db8ddf67e68b354da2d2ae87597bcd5dcf4.png"
                />
                Net Banking
              </Flex>
            </Tab>
            <Tab
              _selected={{
                color: "#9c3353",
                bg: "#EEEEEE80",
                borderRight: "3px solid #9c3353",
              }}
              color="#666666"
              justifyContent="flex-start"
              padding="20px 14px"
              fontSize="14px"
              width="200px"
              height="50px"
            >
              <Flex gap="10px" alignItems={"center"}>
                <Image
                  h="25px"
                  src="https://assets.milaap.org/assets/payment_processor/payment-icons/wallet-e3ff10d1c4af7d1b2b41c9e28b57e51aed5455ed037ac15a1109f446bbb98ce3.png"
                />
                Net Banking
              </Flex>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel width="100%" rounded="md">
              <div mb="25px">
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
            </TabPanel>
            <TabPanel width="100%" rounded="md">
              <div mb="25px">
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
            </TabPanel>
            <TabPanel width="100%" rounded="md">
              <div mb="25px">
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
            </TabPanel>

            <TabPanel width="100%" rounded="md">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4,1fr)",
                  gap: "2%",
                }}
              >
                <Box
                  style={{
                    height: "110px",
                    width: "110px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src="https://cdn.razorpay.com/wallet-sq/mobikwik.png"
                    alt="mobikwick"
                    style={{
                      width: "40px",
                      height: "40px",
                      margin: "auto",
                      marginTop: "20px",
                    }}
                  />
                  <p style={{ marginTop: "10px" }}>Mobikwick</p>
                </Box>
                <Box
                  style={{
                    height: "110px",
                    width: "110px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src="https://cdn.razorpay.com/wallet-sq/payzapp.png"
                    alt="mobikwick"
                    style={{
                      width: "40px",
                      height: "40px",
                      margin: "auto",
                      marginTop: "20px",
                    }}
                  />
                  <p style={{ marginTop: "10px" }}>Payzapp</p>
                </Box>
                <Box
                  style={{
                    height: "110px",
                    width: "110px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src="https://cdn.razorpay.com/wallet-sq/olamoney.png"
                    alt="mobikwick"
                    style={{
                      width: "40px",
                      height: "40px",
                      margin: "auto",
                      marginTop: "20px",
                    }}
                  />
                  <p style={{ marginTop: "10px" }}>Olamoney</p>
                </Box>
                <Box
                  style={{
                    height: "110px",
                    width: "110px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src="https://cdn.razorpay.com/wallet-sq/amazonpay.png"
                    alt="mobikwick"
                    style={{
                      width: "40px",
                      height: "40px",
                      margin: "auto",
                      marginTop: "20px",
                      cursor: "pointer",
                      marginBottom: "10px",
                    }}
                  />
                  <p style={{ marginTop: "10px" }}>Amazonpay</p>
                </Box>
                <Box
                  style={{
                    height: "110px",
                    width: "110px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src="https://cdn.razorpay.com/wallet-sq/freecharge.png"
                    alt="mobikwick"
                    style={{
                      width: "40px",
                      height: "40px",
                      margin: "auto",
                      marginTop: "20px",
                    }}
                  />
                  <p style={{ marginTop: "10px" }}>Freecharge</p>
                </Box>
                <Box
                  style={{
                    height: "110px",
                    width: "110px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src="https://cdn.razorpay.com/wallet-sq/jiomoney.png"
                    alt="mobikwick"
                    style={{
                      width: "40px",
                      height: "40px",
                      margin: "auto",
                      marginTop: "20px",
                    }}
                  />
                  <p style={{ marginTop: "10px" }}>Jiomoney</p>
                </Box>
              </div>
            </TabPanel>
            <TabPanel width="100%" rounded="md">
              <Select
                style={{ border: "1px solid #9c3353" }}
                placeholder="Select bank"
              >
                <option value="option1">Axis Bank</option>
                <option value="option2">Kotak Mahendra Bank</option>
                <option value="option3">State Bank of India</option>
              </Select>
              <Button
                marginTop="2rem"
                bg="#9c3353"
                color="white"
                variant="solid"
                width="50%"
                borderRadius="10px"
                display="flex"
              >
                PAY NOW
              </Button>
            </TabPanel>
          </TabPanels>
        </Tabs>
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

export default Payment;
