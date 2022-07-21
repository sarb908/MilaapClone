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
import { InfoOutlineIcon } from "@chakra-ui/icons";
const LendingCardDetails = () => {
  return (
    <Box w="90%" mt="30px" p="0 30px">
      <Box>
        <Text
          color="#5d5d5d"
          fontWeight="500"
          fontSize="15px"
          textAlign={"left"}
        >
          Select payment mode
        </Text>
      </Box>

      <Tabs variant="unstyled">
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
                <Text fontSize="13px" p="5px" fontWeight={"400"}>
                  INR 677365.98
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
                  INR 677365.98
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
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default LendingCardDetails;
