import {
  Box,
  Container,
  Image,
  Stack,
  Button,
  Text,
  Link,
  Grid,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Flex,
  Center,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaMemory,
  FaStethoscope,
  FaBookOpen,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
      mt="50px"
    >
      <Container as={Stack} maxW={"100%"} paddingTop={"35px"}>
        <Flex justifyContent={"space-around"} w="100%" gap={"5px"}>
          <Stack align={"flex-start"} gap="20px" fontWeight="400" width="170px">
            <Text fontSize={"15px"} color={"#212121"}>
              <u>D</u>onate towards
            </Text>
            <Link
              href={"#"}
              _hover={{
                textDecoration: "none",
              }}
            >
              <Flex gap="4" marginTop="1">
                <Box>
                  <Center>
                    <FaStethoscope color="#9c3353" />
                  </Center>
                </Box>
                <Box>
                  <Center>
                    <Text
                      color={"#6c6c6c"}
                      fontSize={"13px"}
                      fontWeight={"400"}
                    >
                      Medical
                    </Text>
                  </Center>
                </Box>
              </Flex>
            </Link>
            <Link
              href={"#"}
              _hover={{
                textDecoration: "none",
              }}
            >
              <Flex gap="4" marginTop="1">
                <Box>
                  <Center>
                    <FaBookOpen color="#9c3353" />
                  </Center>
                </Box>
                <Box>
                  <Center>
                    <Text
                      color={"#6c6c6c"}
                      fontSize={"13px"}
                      fontWeight={"400"}
                    >
                      Education
                    </Text>
                  </Center>
                </Box>
              </Flex>
            </Link>
            <Link
              href={"#"}
              _hover={{
                textDecoration: "none",
              }}
            >
              <Flex gap="4" marginTop="1">
                <Box>
                  <Center>
                    <FaMemory color="#9c3353" />
                  </Center>
                </Box>
                <Box>
                  <Center>
                    <Text
                      color={"#6c6c6c"}
                      fontSize={"13px"}
                      fontWeight={"400"}
                    >
                      Memorial
                    </Text>
                  </Center>
                </Box>
              </Flex>
            </Link>
          </Stack>

          <Stack align={"flex-start"} width="125px">
            <Text fontSize={"15px"} color={"#212121"}>
              <u>M</u>ilaap
            </Text>
            <Link
              href={"#"}
              color="#9c3353"
              fontSize={"14px"}
              py={1}
              fontWeight={"400"}
              _hover={{
                textDecoration: "none",
              }}
            >
              About Us
            </Link>
            <Link
              href={"#"}
              color="#9c3353"
              fontSize={"13px"}
              py={2}
              fontWeight={"400"}
              _hover={{
                textDecoration: "none",
              }}
            >
              Press and media
            </Link>

            <Link
              href={"#"}
              color="#9c3353"
              fontSize={"13px"}
              py={2}
              fontWeight={"400"}
              _hover={{
                textDecoration: "none",
              }}
            >
              Team
            </Link>

            <Link
              href={"#"}
              color="#9c3353"
              fontSize={"13px"}
              py={2}
              fontWeight={"400"}
              _hover={{
                textDecoration: "none",
              }}
            >
              Careers
            </Link>

            <Link
              href={"/contactUs"}
              color="#9c3353"
              fontSize={"13px"}
              py={2}
              fontWeight={"400"}
              _hover={{
                textDecoration: "none",
              }}
            >
              Contact
            </Link>

            <Link
              href={"#"}
              color="#9c3353"
              fontSize={"13px"}
              py={2}
              fontWeight={"400"}
              _hover={{
                textDecoration: "none",
              }}
            >
              Board
            </Link>

            <Link
              href={"#"}
              color="#9c3353"
              fontSize={"13px"}
              py={1}
              fontWeight={"400"}
              _hover={{
                textDecoration: "none",
              }}
            >
              Thank You
            </Link>
          </Stack>

          <Stack align={"flex-start"} width="248px">
            <Text fontSize={"15px"} color={"#212121"}>
              <u>I</u>ndian office address
            </Text>
            <Text
              align={"start"}
              fontSize="14px"
              fontWeight="400"
              marginBottom="40px"
              width={"206px"}
              color={"#6c6c6c"}
              line-height="1.5"
            >
              Milaap Social Ventures India Pvt. Ltd.
              <br />
              ClayWorks Create - building,11th KM Create Campus,Arakere
              Bannerghatta Rd,
              <br />
              Bangalore, Karnataka, India 560076
            </Text>
            <Text
              height={"30px"}
              paddingTop={"10px"}
              fontSize={"15px"}
              color={"#212121"}
              fontWeight={"500"}
              lineHeight={"1.5"}
              py={4}
            >
              <u>S</u>upported By
            </Text>
            <Flex align={"center"} gap={"2px"}>
              <Image
                width={"49px"}
                height={"22px"}
                src="data:image/png;base64,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"
              />
              <Image
                width={"42px"}
                height={"22px"}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpT3-GMtjwNqXKLubqTfOUqh64jZwooTsxxw&usqp=CAU"
              />
              <Image
                width={"64px"}
                height={"32px"}
                src="data:image/png;base64,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"
              />
              <Image
                width={"47px"}
                height={"32px"}
                src="data:image/png;base64,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"
              />
            </Flex>
          </Stack>

          <Stack align={"center"} width="274px">
            <Box marginBottom={"20px"}>
              <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"20px"}
                height={"50px"}
                borderRadius={"50px"}
                width={"250px"}
                cursor={"pointer"}
                marginLeft={"-25px"}
                // padding={'4px'}
                fontWeight={500}
                color={"white"}
                bg={"#9c3353"}
                href={"#"}
                _hover={{
                  boxShadow:
                    "0 3px 3px 0 rgb(0 0 0 / 14%), 0 1px 7px 0 rgb(0 0 0 / 12%), 0 3px 1px -1px rgb(0 0 0 / 20%)",
                }}
              >
                Start a Fundraiser
              </Button>
            </Box>
            <Box width={"250px"} align={"center"} paddingLeft={"8px"}>
              <Flex gap={"12px"} align={"center"}>
                <Box>
                  <Link
                    href={"/pricing"}
                    color="#9c3353"
                    fontSize={"13px"}
                    fontWeight={"400"}
                    _hover={{
                      textDecoration: "none",
                    }}
                  >
                    Pricing
                  </Link>
                </Box>
                <Box>
                  <Link
                    href={"#"}
                    color="#9c3353"
                    fontSize={"13px"}
                    fontWeight={"400"}
                    _hover={{
                      textDecoration: "none",
                    }}
                  >
                    Reviews
                  </Link>
                </Box>
                <Box>
                  <Link
                    href={"#"}
                    color="#9c3353"
                    fontSize={"13px"}
                    fontWeight={"400"}
                    _hover={{
                      textDecoration: "none",
                    }}
                  >
                    FAQs and tips
                  </Link>
                </Box>
              </Flex>
            </Box>
            <Box paddingTop={"50px"} align={"flex-start"}>
              <Flex align={"flex-start"}>
                <Text
                  padding={" 5px 17px 0 0"}
                  align={"start"}
                  fontSize={"12px"}
                >
                  Find us on
                </Text>
                <Stack direction={"row"} spacing={1}>
                  <SocialButton label={"Twitter"} color="#9c3353" href={"#"}>
                    <FaFacebook
                      color="#9c3353"
                      bg="white"
                      borderColor="#9c3353"
                    />
                  </SocialButton>
                  <SocialButton label={"Twitter"} color="#9c3353" href={"#"}>
                    <FaTwitter color="#9c3353" />
                  </SocialButton>
                  <SocialButton label={"YouTube"} color="#9c3353" href={"#"}>
                    <FaLinkedin color="#9c3353" />
                  </SocialButton>
                  <SocialButton label={"Instagram"} color="#9c3353" href={"#"}>
                    <FaInstagram color="#9c3353" />
                  </SocialButton>
                  <SocialButton label={"Instagram"} color="#9c3353" href={"#"}>
                    <FaYoutube color="#9c3353" />
                  </SocialButton>
                </Stack>
              </Flex>
            </Box>
          </Stack>

          <Flex
            align={"flex-start"}
            py={2}
            width="419px"
            gap={"15px"}
            height={"256px"}
            bg={"#f7f7f7"}
            borderBottomLeftRadius={"50px"}
          >
            <Box>
              <Image
                width={"200px"}
                height={"189px"}
                src="https://pages.milaap.org/wp-content/uploads/2021/10/download-app.png"
              />
            </Box>
            <Box align={"center"} py={2} fontSize={"14px"}>
              <Text py={2} color={"black"}>
                Set up, manage and promote your fundraiser with Milaap app
              </Text>
              <Text paddingBottom={"10px"} color="#9c3353" fontWeight={"700"}>
                Download Now!
              </Text>
              <Grid gap={"25px"} column={{ base: "1", md: "2", sm: "2" }}>
                <a href="https://play.google.com/store/apps/details?id=org.milaap.app.android&utm_source=homepage_download_app&utm_medium=desktop">
                  <Image
                    width={"145px"}
                    height={"43px"}
                    src="https://assets.milaap.org/assets/play-store-btn-3cb8952867b0552ef1377bf63004d9d6613fd11da71e8446e7e6be1fd61f3182.png"
                  />
                </a>
                <a href="https://apps.apple.com/in/app/milaap/id1571562098?utm_source=homepage_download_app&utm_medium=desktop">
                  <Image
                    width={"145px"}
                    height={"43px"}
                    src="https://assets.milaap.org/assets/app-store-btn-0ae1713b1521ee08942a97e257b38ac5050a6cf70df4084b3f4ab234e60ea51f.png"
                  />
                </a>
              </Grid>
            </Box>
          </Flex>
        </Flex>
      </Container>

      <Box
        bg={"black"}
        color={"white"}
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          padding={"0px 115px"}
          as={Stack}
          maxW={"6xl"} // height={'51px'}
          py={5}
          fontSize={"11px"}
          fontWeight={"500"}
          direction={{ base: "column", md: "row" }}
          spacing={["50px", "1"]}
          align={{ md: "center" }}
          gap="20px"
          justify={{ base: "space-around", md: "center" }}
          centerContent
        >
          <Stack direction={["column", "row"]} spacing={6}>
            <Link
              href={"/"}
              _hover={{
                textDecoration: "none",
              }}
            >
              Security & Privacy
            </Link>
            <Link
              href={"/"}
              _hover={{
                textDecoration: "none",
              }}
            >
              Condition of use
            </Link>
          </Stack>
          <Text color={["white"]}>
            © 2010 - 2022 milaap.org. All rights reserved.
          </Text>
        </Container>
      </Box>

      <Link href="/contactUs">
        <Container
          centerContent
          bg={"#9c3353"}
          bottom={"0"}
          fontSize={"15px"}
          right={"70px"}
          color={"white"}
          width={"140px"}
          height={"44px"}
          position={"fixed"}
          borderTopRightRadius={"5px"}
          borderTopLeftRadius={"5px"}
        >
          <Flex
            align={"center"}
            gap={"6px"}
            paddingTop={"14px"}
            fontWeight={"400"}
          >
            <Box height={"33px"} width={"25px"}>
              <Image src="https://assets.milaap.org/assets/support/support-026639827351db2f76f01cb2405a636907a4b4ea56506f138364b541f9518a4d.png" />
            </Box>
            <Box paddingTop={"3px"} height={"33px"} fontSize={"14px"}>
              Contact us
            </Box>
          </Flex>
        </Container>
      </Link>
    </Box>
  );
};

export default Footer;
