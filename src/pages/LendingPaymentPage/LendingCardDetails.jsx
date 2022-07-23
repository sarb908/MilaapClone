import React from "react";
import {
  Box,
  Text,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { InfoOutlineIcon, ChevronUpIcon } from "@chakra-ui/icons";
import Payment from "./Payment";
import CreditCard from "./CreditCard";
const LendingCardDetails = (props) => {
  return (
    <Box w="80%" mt="30px">
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
        <ChevronUpIcon w="6" h="6" />
      </Text>

      <Tabs
        position="relative"
        variant="unstyled"
        mt="40px"
        mb="300px"
        pb="100px"
      >
        <TabList display="flex" gap="15px" color="#5d5d5d" textAlign={"left"}>
          <Tab
            w="49%"
            textAlign={"left"}
            boxShadow={"lg"}
            _selected={{ color: "white", bg: "#9c3353" }}
          >
            <Flex
              w="100%"
              p="10px"
              h="150px"
              gap="20px"
              flexDirection="column"
              position={"relative"}
            >
              <Box
                position="absolute"
                right="-31px"
                w="fit-content"
                bg="#582d44"
                color="white"
              >
                <Text
                  role={"tab"}
                  _selected={{ bg: "red" }}
                  fontSize="13px"
                  p="5px"
                  fontWeight={"400"}
                >
                  INR {props.total}
                </Text>
                <Box
                  position="absolute"
                  right={"0"}
                  w="0"
                  h="0"
                  borderRight="15px solid transparent"
                  borderTop="12px solid #582d44"
                ></Box>
              </Box>
              <Text fontSize="16px" fontWeight={"500"}>
                Indian
              </Text>

              <Text fontSize="13px" fontWeight={"500"}>
                Credit / Debit cards, net banking, wallets and UPI
              </Text>
              <Text fontSize="16px" fontWeight={"500"}>
                Issued in India
              </Text>
            </Flex>
          </Tab>
          <Tab
            w="49%"
            textAlign={"left"}
            boxShadow={"lg"}
            _selected={{ color: "white", bg: "#9c3353" }}
          >
            <Flex
              w="100%"
              h="150px"
              p="10px"
              flexDirection="column"
              gap="10px"
              position={"relative"}
            >
              <Box
                position="absolute"
                right="-31px"
                w="fit-content"
                bg="#582d44"
                color="white"
              >
                <Text fontSize="13px" p="5px" fontWeight={"400"}>
                  INR {props.total}
                </Text>
                <Box
                  position="absolute"
                  right={"0"}
                  w="0"
                  h="0"
                  borderRight="15px solid transparent"
                  borderTop="12px solid #582d44"
                ></Box>
              </Box>
              <Text fontSize="16px" fontWeight={"500"}>
                International
              </Text>
              <Flex justify="space-between" w="100%">
                <Text fontSize="13px" fontWeight={"500"}>
                  Card
                </Text>
                <Text fontSize="13px" fontWeight={"500"}>
                  <InfoOutlineIcon /> 1 = INR 71.5
                </Text>
              </Flex>
              <Text fontSize="13px" fontWeight={"500"}>
                Foreign Debit / Credit card
              </Text>
              <Text fontSize="16px" fontWeight={"500"}>
                Issued outside India
              </Text>
            </Flex>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel width="90%" boxShadow={"lg"} rounded="md" m="30px 0">
            <Payment total={props.total} />
          </TabPanel>
          <TabPanel width="80%" boxShadow={"lg"} rounded="md" m="30px auto">
            <CreditCard total={props.total} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default LendingCardDetails;
