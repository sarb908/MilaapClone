import { Flex } from "@chakra-ui/react";
import React from "react";
import { Spinner } from "@chakra-ui/react";
import { useSelector } from "react-redux";
const Loading = () => {
  const appLoading = useSelector((state) => state.reducer.isLoading);
  const cartLoading = useSelector((state) => state.cartReducer.isLoading);
  if (appLoading || cartLoading) {
    return (
      <Flex
        justify="center"
        align={"center"}
        top="0"
        h="100vh"
        w="100vw"
        position="fixed"
        zIndex={99999}
        bg="white"
        opacity={0.6}
      >
        <Spinner
          thickness="8px"
          speed="1s"
          emptyColor="gray.200"
          color="#9c3353"
          size="xl"
        />
      </Flex>
    );
  }
  return <></>;
};

export default Loading;
