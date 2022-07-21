import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Checkbox,
  Stack
} from "@chakra-ui/react";

const LendFilter = () => {
  return (
    <Box margin="20px">
      <Box textAlign="left" mb={"10px"}>
        <Heading size="md" color="gray">
          Filter By
        </Heading>
      </Box>
      <Accordion
        defaultIndex={[0]}
        allowMultiple
        w={[250, 350, 600, 250]}
      >
        <AccordionItem bg={"#f5f5f5"} marginBottom="10px">
          <h2>
            <AccordionButton border={"1px solid #dddddd"}>
              <Box flex="1" textAlign="left">
                Cause
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack>
              <Checkbox>Housing</Checkbox>
              <Checkbox>Enterprise Development</Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem bg={"#f5f5f5"} marginBottom="10px">
          <h2>
            <AccordionButton border={"1px solid #dddddd"}>
              <Box flex="1" textAlign="left">
                State
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack>
              <Checkbox>West Bengal</Checkbox>
              <Checkbox>Tamil Nadu</Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem bg={"#f5f5f5"} marginBottom="10px">
          <h2>
            <AccordionButton border={"1px solid #dddddd"}>
              <Box flex="1" textAlign="left">
                Repayment
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack>
              <Checkbox>12 months or less</Checkbox>
              <Checkbox>13 to 17 months</Checkbox>
              <Checkbox>18 to 23 months</Checkbox>
              <Checkbox>24 months and more</Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem bg={"#f5f5f5"}>
          <h2>
            <AccordionButton border={"1px solid #dddddd"}>
              <Box flex="1" textAlign="left">
                Gender
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack>
              <Checkbox>Female</Checkbox>
              <Checkbox>Male</Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default LendFilter;
