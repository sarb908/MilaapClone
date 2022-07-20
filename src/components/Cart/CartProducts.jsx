import React from "react";
import { Flex, Image, Text, Box, Input, Badge, Button } from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
const CartProducts = () => {
  return (
    <Flex gap="5px" mb="20px">
      <Flex w="20%">
        <Image
          h="100%"
          alt="donate"
          src="https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_215,w_320/v1656653678/production/images/loan/a029000000s6vSMAAY-BlazeTrust-L-0318-135967_1656653676.jpg"
        />
      </Flex>
      <Text
        fontWeight="400"
        fontSize="14px"
        lineHeight="24px"
        color="#5d5d5d"
        minWidth="max-content"
      >
        PARAMESWARI R And Group
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
          <Input size="md" variant="flushed" focusBorderColor="#94f0ff" />
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
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default CartProducts;
