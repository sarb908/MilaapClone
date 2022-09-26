import { Flex, useToast } from "@chakra-ui/react";
import React from "react";
import { Spinner } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams, Navigate } from "react-router-dom";
import * as types from "./../store/AuthReducer/actionTypes";
const GoogleAuth = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get("token");

  if (token) {
    dispatch({ type: types.LOGIN_SUCCESS, payload: token });
    toast({
      title: "Login Success",

      status: "success",
      duration: 9000,
      isClosable: true,
    });
    return <Navigate to="/" replace={true} />;
  }

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
};

export default GoogleAuth;
