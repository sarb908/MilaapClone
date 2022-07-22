import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Checkbox,
  Stack,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

const LendFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlState = searchParams.getAll("state");
  const urlCause = searchParams.getAll("cause");
  const [state, setState] = useState(urlState || []);
  const [cause, setCause] = useState(urlCause || []);

  const handleCheckbox = (e) => {
    const option = e.target.value;
    let newState = [...state];
    let newCause = [...cause];
    if (state.includes(option)) {
      newState.splice(newState.indexOf(option), 1);
    } else if (option === "westbengal" || option === "tamilnadu") {
      newState.push(option);
    }
    if (cause.includes(option)) {
      newCause.splice(newCause.indexOf(option), 1);
    } else if (option === "house" || option === "enterprise") {
      newCause.push(option);
    }
    setState(newState);
    setCause(newCause);
  };

  useEffect(() => {
    if (state || cause) {
      let params = {};
      state && (params.state = state);
      cause && (params.cause = cause);

      setSearchParams(params);
    }
  }, [state, cause, setSearchParams]);

  return (
    <Box margin="20px">
      <Box textAlign="left" mb={"10px"}>
        <Heading size="md" color="gray">
          Filter By
        </Heading>
      </Box>
      <Accordion defaultIndex={[0]} allowMultiple w={[250, 350, 600, 260]}>
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
              <Checkbox
                onChange={handleCheckbox}
                value="house"
                defaultChecked={cause.includes("house")}
              >
                Housing
              </Checkbox>
              <Checkbox onChange={handleCheckbox} value="enterprise">
                Enterprise Development
              </Checkbox>
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
              <Checkbox onChange={handleCheckbox} value="westbengal">
                West Bengal
              </Checkbox>
              <Checkbox onChange={handleCheckbox} value="tamilnadu">
                Tamil Nadu
              </Checkbox>
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
