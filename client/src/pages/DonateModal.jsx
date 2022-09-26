import {
  Center,
  Button,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Select,
  Flex,
  Text,
  Heading,
  Box,
  Input,
  Switch,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
const DonateModal = ({ isOpen, onOpen, onClose }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/successPayment");
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading mt={"12%"} mb={"8%"} fontSize={"20px"}>
            Make a secure donation
          </Heading>
          <hr />
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box h={"100px"} color={"white"} m={"auto"} bgColor={"#9c3353"}>
            <Flex gap={"2%"}>
              <Box ml={"3%"} mt={"2%"}>
                <label>Current</label>
                <Select mt={"8%"} fontSize="12px">
                  <option>₹ INR</option>
                  <option>$ USD</option>
                </Select>
              </Box>
              <Box m={"2% 10px"}>
                <label>Amount</label>
                <Input mt={"3%"} type="number" />
              </Box>
            </Flex>
          </Box>
          <Text fontSize={"xs"} mt={"2%"} bgColor={"#ffffd5"}>
            For this contribution, you will be eligible for tax exemption
            benefit
          </Text>
          <Box textAlign={"justify"} bgColor={"#f5f5f5"}>
            <br />
            <Text fontSize={"14px"}>
              Milaap charges NO fees. We rely on donors like you to cover for
              our expenses. Kindly consider a tip. Thank you 🙏
            </Text>
            <Flex
              mt={"6%"}
              mb={"4%"}
              gap={"10%"}
              justifyContent={"space-beetween"}
            >
              <label>Include a tip of</label>
              <Select w={"50%"} mb={"6%"}>
                <option>8 % (₹ 200.00)</option>
                <option>10 % (₹ 250.00)</option>
                <option>12 % (₹ 300.00)</option>
                <option>15 % (₹ 375.00)</option>
                <option>other</option>
              </Select>
            </Flex>
          </Box>
          <Box display="flex" alignItems="center">
            <Text mb="0" mr={"4%"}>
              Donate anonymously
            </Text>
            <Switch mt={"3%"} colorScheme={"pink"} />
          </Box>
          <Center>
            <Box mt={"8%"}>
              <Button
                mb={"6%"}
                bgColor={"#9c3353"}
                fontSize={"18px"}
                color={"white"}
                onClick={clickHandler}
              >
                Continue to pay ₹2875{" "}
              </Button>
            </Box>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DonateModal;
