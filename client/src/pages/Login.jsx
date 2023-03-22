import {
  Flex,
  Box,
  FormControl,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as types from "./../store/AuthReducer/actionTypes";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { login } from "../store/AuthReducer/actions";

const Login = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const googleHandler = () => {
    window.location.href = "https://milaapsarb.onrender.com/auth/google";
  };

  const formsubmit = (e) => {
    e.preventDefault();

    dispatch(login(data)).then((d) => {
      if (d.type == types.LOGIN_SUCCESS) {
        toast({
          title: "login suceess",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/");
      } else {
        toast({
          title: "user datail does not match",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      style={{ backgroundColor: "#9C3353" }}
    >
      <Box
        w="1070px"
        h="560px"
        style={{ marginLeft: "10px" }}
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={10}
      >
        <HStack spacing="34px">
          <Stack w="110px" h="110px" marginLeft={8}>
            <box
              w="110px"
              h="150px"
              style={{
                backgroundColor: "#9C3353",
                borderRadius: "50%",
                padding: "15px",
                marginLeft: "10px",
              }}
            >
              <img
                alt="img"
                src="https://assets.milaap.org/assets/milaap-trasparent-logo-25f6253e0156e2f82e2c3daf85575d169864e35ffffd21033ac59da0b4dd88e0.png"
              />
            </box>
            <Stack w="190px" h="110px" style={{ marginLeft: "-30px" }}>
              <h1 style={{ fontSize: "19px" }}>Welcome to Milaap,</h1>
              <h6 style={{ fontSize: "13px", color: "grey", marginTop: "1px" }}>
                India’s largest crowdfunding site
              </h6>
            </Stack>
          </Stack>

          <Stack
            style={{ marginLeft: "300px", marginTop: "50px" }}
            spacing="34px"
          >
            <box
              style={{
                height: "30px",
                width: "310px",
                marginLeft: "40px",
                marginTop: "-10px",
              }}
            >
              <h1
                style={{
                  color: "grey",
                  size: "20px",
                  margin: "-45px auto 20px",
                }}
              >
                Quickly login using
              </h1>

              <Button onClick={googleHandler} leftIcon={<FcGoogle />}>
                Google
              </Button>
            </box>

            <form onSubmit={formsubmit}>
              <Stack pt={8}>
                <FormControl id="email">
                  <InputGroup>
                    <Input
                      type="email"
                      variant="flushed"
                      placeholder="
                    Mobile number / Email ID"
                      name="email"
                      value={data.email}
                      onChange={(e) => {
                        setData({ ...data, email: e.target.value });
                      }}
                    />
                  </InputGroup>
                  <Text style={{ marginLeft: "-270px", color: "red" }}>
                    {emailError}
                  </Text>
                </FormControl>
              </Stack>
              <Stack pt={7}>
                <FormControl id="password" isRequired>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      variant="flushed"
                      placeholder="Password / OTP
                      "
                      name="password"
                      value={data.password}
                      onChange={(e) => {
                        setData({ ...data, password: e.target.value });
                      }}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </Stack>
              <Stack spacing={10} pt={10}>
                <Button
                  type="submit"
                  style={{ backgroundColor: "#9C3353" }}
                  borderRadius="33px"
                  loadingText="Submitting"
                  size="lg"
                  bg={"pink.700"}
                  color={"white"}
                  _hover={{
                    bg: "pink.500",
                  }}
                >
                  Login
                </Button>
              </Stack>
            </form>
            <Stack pt={2}>
              <Text align={"center"} style={{ color: "#9C3353" }}>
                Forgot Password?
              </Text>
            </Stack>

            <Stack pt={6}>
              <Text align={"center"}>
                New to Milaap? Sign up now, it’s quick & free{" "}
                <Link to="/Signup">
                  <Button
                    size="md"
                    borderRadius="33px"
                    style={{ backgroundColor: "#9C3353" }}
                    color="white"
                  >
                    Signup
                  </Button>
                </Link>
              </Text>
            </Stack>
          </Stack>
        </HStack>
      </Box>
    </Flex>
  );
};

export default Login;
