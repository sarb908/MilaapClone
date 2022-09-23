import React from "react";
import {
  Box,
  Image,
  Text,
  Tag,
  CircularProgress,
  CircularProgressLabel,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const DonateCard = ({ e }) => {
  const img = e["lozad src"];
  const image = {
    background: "url(" + img + ")",
    bgSize: "100%",
    backgroundRepeat: "repeat-x",
  };
  return (
    <Link to={`/donate/${e.id}`}>
      <Box borderRadius="10px" boxShadow="lg" w="320px" h="450px">
        <Box w="100%" sx={image} borderRadius="3px 3px 0px 0px" h="250px">
          {e["tax-ribbon"] ? (
            <Tag m="15px 0px 0px -220px" bg={"#9c3353"} color="white">
              {e["tax-ribbon"]}
            </Tag>
          ) : null}
        </Box>
        <Box h="60px">
          <Text
            fontSize="15px"
            fontWeight="500"
            textAlign="left"
            m="0px 10px 10px 10px"
          >
            {e.motivation}
          </Text>
        </Box>

        <Flex m="20px 10px 10px 10px">
          <CircularProgress
            value={e["progress-circle"]}
            color="green.300"
            size="50px"
          >
            <CircularProgressLabel>
              {e["progress-circle"]}%
            </CircularProgressLabel>
          </CircularProgress>
          <Stack textAlign="left" ml="10px">
            <Text fontSize="xs">Raised</Text>
            <Text fontSize="md" fontWeight="500">
              {e["raised-amount"]}
            </Text>
          </Stack>
          <Stack
            ml="10px"
            textAlign="left"
            borderLeft={"3px solid #ecedee"}
            paddingLeft="10px"
          >
            <Text fontSize="xs">Created by</Text>
            <Text fontSize="sm">{e["created-name"]}</Text>
          </Stack>
        </Flex>
        <Box
          bg={"#ecedee"}
          m="15px 10px 25px 10px"
          borderLeft="3px solid black"
          textAlign="left"
        >
          <Text fontSize="13px" fontWeight="300" ml="10px">
            For every {e["status-msg"] ? e["status-msg"] : "₹100"} you donate,
            Milaap will contribute{" "}
            {e["status-msg 2"] ? e["status-msg 2"] : "₹10"} on your behalf.
          </Text>
        </Box>
      </Box>
    </Link>
  );
};

export default DonateCard;
