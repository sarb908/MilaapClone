import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      style={{ backgroundColor: "#9C3353" }}
    >
      <Box
        w="1070px" h='560px'
        style={{ marginLeft: "10px" }}
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={10}
      >
       
        <HStack spacing='34px' >

        <Stack w="110px" h="110px" marginLeft={8} >
         
            <box w="110px" h="150px" style={{ backgroundColor: "#9C3353",borderRadius:"50%",padding:"15px" ,marginLeft:"10px" }}>
              <img src="https://assets.milaap.org/assets/milaap-trasparent-logo-25f6253e0156e2f82e2c3daf85575d169864e35ffffd21033ac59da0b4dd88e0.png"/>
              
            </box>
            <Stack w="190px" h="110px" style={{marginLeft:"-30px"} }>
            <h1 style={{fontSize:"19px"}}>Welcome to Milaap,</h1>
            <h6 style={{fontSize:"13px",color:"grey",marginTop:"1px"}}>India’s largest crowdfunding site</h6>
            </Stack>
            </Stack>
           
            <Stack style={{marginLeft:"300px",marginTop:"50px"}} spacing='34px'>
            <box  style={{ height:"30px",width:"310px",marginLeft:"40px" ,marginTop:"-10px" }}>
            <h1 style={{color:"grey",size:"20px"}}>Sign up & manage fundraisers, donations & more</h1>
            </box>
            <Box>
              <FormControl id="lastName">
                <Input
                  type="text"
                  variant="flushed"
                  placeholder="Full Name"
                  htmlSize={49}
                />
              </FormControl>
            </Box>
    
          <FormControl id="email">
            <Input type="email" variant="flushed" placeholder="Email" />
          </FormControl>
          <FormControl id="password" isRequired>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                variant="flushed"
                placeholder="Password"
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
          <Stack spacing={10} pt={2}>
            <Button
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
              Sign up
            </Button>
          </Stack>
          <Stack pt={10}>
            <Text align={"center"}>
              Already signed up with Milaap?{" "}
              <Button
                size="md"
                borderRadius="33px"
                style={{ backgroundColor: "#9C3353" }}
                color="white"
              >
                Login
              </Button>
            </Text>
          </Stack>
          </Stack>
          </HStack>
    
      </Box>
    </Flex>
  );
}
