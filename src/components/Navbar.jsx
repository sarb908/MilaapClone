import {
  Box,
  Flex,
  IconButton,
  Button,
  Switch,
  Stack,
  useColorModeValue,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as Linked } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import React, { useState } from "react";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box height={"60px"} z-index={"1000"}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={"none"}
        boxShadow={"0 0 30px 0 rgb(156 51 83 / 20%);"}
        borderStyle={"solid"}
        margin={"-10px 0 -5px 0"}
        paddingBottom={"-8px"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          align={"center"}
        >
          <Image
            height="40px"
            src="https://assets.milaap.org/assets/milaap-logo-tiny-4d3dbc4e55c2aaec351f0f376329c624236c4d6266b910f472684e70603f600d.png"
          />

          <Flex display={{ base: "none", md: "flex" }} height={"70px"} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          height={"70px"}
          align={"center"}
          flex={{ base: 1, md: 0 }}
          paddingRight={"50px"}
          justify={"flex-end"}
          direction={"row"}
          spacing={120}
        >
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"20px"}
            height={"45px"}
            borderRadius={"50px"}
            width={"230px"}
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
          <Box>
            <Linked to="/signUp">
              <i
                class="far fa-user-circle"
                style={{
                  color: "#9c3353",
                  fontSize: "40px",
                  fontWeight: "1px",
                }}
              ></i>
            </Linked>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.600", "white");

  const [colorCode, setColorCode] = useState("white");
  const [clr, setClr] = useState("#212121");

  return (
    <Stack direction={"row"} spacing={7} align={"center"} height={"70px"}>
      {NAV_ITEMS.map((navItem) => (
        <Box
          bg={"white"}
          onClick={() => {
            setColorCode("#9c3353");
            setClr("white");
          }}
          height={"70px"}
          align={"center"}
          padding={"20px 5px 0px 5px"}
          _hover={{
            textDecoration: "none",
            height: "70px",
            align: "center",
            color: "white",
            bg: "#9c3353",
          }}
          key={navItem.label}
        >
          <Box
            p={2}
            // href={navItem.href ?? "#"}
            fontSize={"16px"}
            fontWeight={500}
            //color={`${clr}`}
            color={linkColor}
            _hover={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <Linked to={navItem.href}>{navItem.label}</Linked>
          </Box>
        </Box>
      ))}
      <Switch size="lg" colorScheme="pink" />
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Donate",
    href: "/donate",
  },
  {
    label: "Lend",
    href: "/lend",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Contact Us",
    href: "/contactUs",
  },
];
