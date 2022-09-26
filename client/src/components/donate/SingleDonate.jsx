import {
  Box,
  Flex,
  Heading,
  Tag,
  CircularProgress,
  CircularProgressLabel,
  Stack,
  Text,
  Button,
  Link,
  Hide,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { getDonate } from "../../store/AppReducer/action";
import { BsWhatsapp, BsFacebook } from "react-icons/bs";
import { FaHandHoldingHeart } from "react-icons/fa";
import DonateModal from "./../../pages/DonateModal";
const SingleDonate = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { id } = useParams();
  const donate = useSelector((store) => store.reducer.donate);
  const [item, setItem] = useState({});

  useEffect(() => {
    dispatch(getDonate());
  }, [donate?.length, dispatch]);

  useEffect(() => {
    if (id) {
      const temp = donate.find((donate) => donate.id === Number(id));
      temp && setItem(temp);
    }
  }, [donate, id]);

  const img = item["lozad src"];
  const image = {
    background: "url(" + img + ")",
    bgSize: "100%",
    backgroundRepeat: "repeat-x",
  };

  return (
    <Box>
      <Flex
        margin="auto"
        w={["95vw", "95vw", "95vw", "80vw"]}
        gap="30px"
        direction={["column", "column", "column", "column", "row"]}
      >
        <Box w={["100%", "100%", "100%", "100%", "50%"]}>
          <Box bg={"#f3f3f3"} h="60px" borderRadius="10px">
            <Text fontSize="sm" textAlign="center">
              Your donations are protected by Milaap Guarantee. 100% refund in
              the rare instance of proven misuse
            </Text>
          </Box>
          <Heading fontSize="25px" fontWeight="500" textAlign="left" m="40px">
            {item.motivation}
          </Heading>
          <Box
            w="100%"
            sx={image}
            borderRadius="3px 3px 0px 0px"
            h="450px"
            textAlign="left"
          >
            {item["tax-ribbon"] ? (
              <Tag m="10px" bg={"#9c3353"} color="white" size="lg">
                {item["tax-ribbon"]}
              </Tag>
            ) : null}
          </Box>
          <Flex m="20px 10px 10px 10px" justifyContent="space-between">
            <Flex>
              <CircularProgress
                value={item["progress-circle"]}
                color="green.300"
                size="80px"
              >
                <CircularProgressLabel>
                  {item["progress-circle"]}%
                </CircularProgressLabel>
              </CircularProgress>
              <Stack textAlign="left" m="12px">
                <Text fontSize="sm">Raised</Text>
                <Stack direction="row">
                  <Text fontSize="lg" fontWeight="500" color={"#9c3353"}>
                    {item["raised-amount"]}
                  </Text>
                  <Text fontSize="lg" fontWeight="500">
                    of Rs.5,00,000
                  </Text>
                </Stack>
              </Stack>
            </Flex>
            <Button borderRadius="15px" m="20px">
              <Link>72 suppporters</Link>
            </Button>
          </Flex>
          <Button
            bg={"#25d366"}
            color="white"
            size="lg"
            w="250px"
            borderRadius="25px"
          >
            <BsWhatsapp />
            Share
          </Button>
          <Button
            bg={"#3b5998"}
            color="white"
            w="250px"
            size="lg"
            borderRadius="25px"
            m="20px"
          >
            <BsFacebook />
            Share
          </Button>
          <Flex m="20px" justifyContent="space-around">
            <Flex border={"1px solid #e0e1e3"} w="300px">
              <Box bg={"#eddae0"} borderRadius="50%" w="50px" h="50px" m="20px">
                <Text mt="12px">
                  {item["created-name"] ? item["created-name"][0] : "A"}
                </Text>
              </Box>
              <Box m="20px">
                <Text fontSize="sm">Created by</Text>
                <Text>{item["created-name"]}</Text>
              </Box>
            </Flex>
            <Flex border={"1px solid #e0e1e3"} w="300px">
              <Box bg={"#eddae0"} borderRadius="50%" w="50px" h="50px" m="20px">
                <Text mt="12px">
                  {item["created-name"] ? item["created-name"][0] : "A"}
                </Text>
              </Box>
              <Box m="10px 5px 0px 0px">
                <Text fontSize="sm">This fundraiser will benefit</Text>
                <Text>{item["created-name"]}</Text>
                <Text fontSize="sm">from Namakkal, Tamil Nadu</Text>
              </Box>
            </Flex>
          </Flex>
          <Box
            textAlign="left"
            m="10px"
            bg="#9c3353"
            color="white"
            w="200px"
            padding="15px"
            borderRadius="25px"
          >
            <Heading fontSize="xl" textAlign="center">
              Story
            </Heading>
          </Box>
          <Box w="100%" mt="30px">
            <Text textAlign="left">
              Hi, I am {item["created-name"]} and I am raising funds for My
              Sister- Sindhu as she has undergone Pre mature delivery . Doctors
              have advised her to undergo an operation. She is undergone
              treatment at a Private Hospital, Coimbatore, Tamil Nadu. ﻿We have
              spent approximately Rs.4 Lakhs. To support the treatment we have
              taken hand loan from my friend, and need to repay it to him
              shortly. We are unable to pay the loan amount since we have
              exhausted the savings and earnings we had. Now we don't have other
              ways except to seek help from you. I request you to kindly
              contribute towards the treatment and help in this hour of need.
              Each contribution is important! Please help raise the required
              amount by clicking on the donate button and sharing this
              fundraiser with family and friends. We are grateful for your help
              and good wishes! “The battle of life can be won with kindness.
              Show that you care. Donate now.” His Teachers’ - be it from his
              toddler school - Ashram, Coimbatore or be it his PU College –
              St-Joseph Indian or his College – Presidency, Bangalore, all know
              him to be the most disciplined Gentleman, Extremely Respectful
              towards his Mentors or Faculty, protector and a crush of his
              opposite counterparts, Kind towards the Gateman to the Office boy
              or the Third Gender – Ever Ready to Help be it even an animal on
              the street. Anyone who knows him will vouch for him. Just within a
              few months of his professional career – he has made lifelong
              friends be it at Cult.fit or IBM-Kindryl. Overall, a charismatic
              personality. As a person, he’s the perfect example of a young man
              with no habits and a tea totaller.
            </Text>
          </Box>
          <Box
            m="50px 0 50px 0"
            borderRadius="0px 20px 0px 20px"
            boxShadow={"2xl"}
            padding="20px"
          >
            <Text fontSize="sm">
              If something isn't right, we will work with you to ensure no
              misuse occurs.
            </Text>
            <Link color={"#9c3353"} fontSize="sm">
              Report this cause
            </Link>
          </Box>
          <Box bg={"#fceef2"} padding="20px" borderRadius="10px">
            <Box>
              <Heading m="20px" fontSize="lg">
                Supporters
              </Heading>
            </Box>
            <Box>
              <Flex>
                <Box
                  bg={"#eddae0"}
                  borderRadius="50%"
                  w="50px"
                  h="50px"
                  m="20px"
                >
                  <Text mt="12px">
                    {item["created-name"] ? item["created-name"][0] : "A"}
                  </Text>
                </Box>
                <Box padding="0px" w="400px">
                  <Text fontSize="sm" textAlign="left" mt="22px">
                    {item["created-name"]}
                  </Text>
                  <Text
                    fontSize="sm"
                    textAlign="left"
                    borderBottom={"1px solid #ead0d8"}
                  >
                    ₹1,000
                  </Text>
                </Box>
              </Flex>
              <Flex>
                <Box
                  bg={"#eddae0"}
                  borderRadius="50%"
                  w="50px"
                  h="50px"
                  m="20px"
                >
                  <Text mt="12px">A</Text>
                </Box>
                <Box padding="0px" w="400px">
                  <Text fontSize="sm" textAlign="left" mt="22px">
                    Anonymous
                  </Text>
                  <Text
                    fontSize="sm"
                    textAlign="left"
                    borderBottom={"1px solid #ead0d8"}
                  >
                    ₹7,000
                  </Text>
                </Box>
              </Flex>
              <Flex>
                <Box
                  bg={"#eddae0"}
                  borderRadius="50%"
                  w="50px"
                  h="50px"
                  m="20px"
                >
                  <Text mt="12px">
                    {item["created-name"] ? item["created-name"][0] : "A"}
                  </Text>
                </Box>
                <Box padding="0px" w="400px">
                  <Text fontSize="sm" textAlign="left" mt="22px">
                    {item["created-name"]}
                  </Text>
                  <Text
                    fontSize="sm"
                    textAlign="left"
                    borderBottom={"1px solid #ead0d8"}
                  >
                    ₹1,000
                  </Text>
                </Box>
              </Flex>
              <Flex>
                <Box
                  bg={"#eddae0"}
                  borderRadius="50%"
                  w="50px"
                  h="50px"
                  m="20px"
                >
                  <Text mt="12px">A</Text>
                </Box>
                <Box padding="0px" w="400px">
                  <Text fontSize="sm" textAlign="left" mt="22px">
                    Anonymous
                  </Text>
                  <Text
                    fontSize="sm"
                    textAlign="left"
                    borderBottom={"1px solid #ead0d8"}
                  >
                    ₹10,315
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Link color={"#9c3353"}>View all supporters</Link>
          </Box>
          <Box
            m="50px 0 50px 0"
            borderRadius="0px 20px 0px 20px"
            boxShadow={"2xl"}
            padding="20px"
          >
            <Text>
              Create a support fundraiser page and raise donations from your
              friends to help Sindhu
            </Text>
            <Button
              m="10px"
              bg="#9c3353"
              color="white"
              w="400px"
              padding="15px"
              borderRadius="25px"
            >
              Create a support fundraiser
            </Button>
          </Box>
          <Box
            m="50px 0 50px 0"
            borderRadius="0px 20px 0px 20px"
            boxShadow={"2xl"}
            padding="20px"
          >
            <Text>
              If something isn't right, we will work with you to ensure no
              misuse occurs.
            </Text>
            <Link color={"#9c3353"}>Report this cause</Link>
          </Box>
        </Box>
        <Hide below="6xl">
          <Box
            w="400px"
            h="600px"
            padding="20px"
            bg={"#f7f7f7"}
            borderRadius="10px"
          >
            <Flex justifyContent="space-between">
              <Box>
                <FaHandHoldingHeart />
                <Text>Donate</Text>
              </Box>
              <Link color={"#9c3353"}>1186 Supporters</Link>
            </Flex>
            <Flex>
              <CircularProgress
                value={item["progress-circle"]}
                color="green.300"
                size="80px"
              >
                <CircularProgressLabel>
                  {item["progress-circle"]}%
                </CircularProgressLabel>
              </CircularProgress>
              <Stack textAlign="left" m="12px">
                <Text fontSize="sm">Raised</Text>
                <Stack direction="row">
                  <Text fontSize="lg" fontWeight="500" color={"#9c3353"}>
                    {item["raised-amount"]}
                  </Text>
                  <Text fontSize="lg" fontWeight="500">
                    of Rs.5,00,000
                  </Text>
                </Stack>
              </Stack>
            </Flex>
            <Box
              bg={"#ecedee"}
              m="15px 10px 25px 10px"
              borderLeft="3px solid black"
              textAlign="left"
              padding="10px"
            >
              <Text>
                Recieve
                <span> tax benefits </span>
                by donating to this cause.
              </Text>
            </Box>
            <Button
              m="10px"
              bg="#9c3353"
              color="white"
              w="300px"
              padding="25px"
              borderRadius="25px"
              onClick={onOpen}
            >
              Donate now
            </Button>
            <Box>
              <Text fontSize="sm">Card, Netbanking, Cheque pickups</Text>
            </Box>
            <Flex>
              <Box bg={"#9c3353"} w="100px" h="1px" m="10px"></Box>
              <Text fontSize="sm" color={"#9c3353"}>
                Or Donate using
              </Text>
              <Box bg={"#9c3353"} w="100px" h="1px" m="10px"></Box>
            </Flex>
            <Box
              backgroundImage="url(../img2.png)"
              h="180px"
              w="180px"
              margin="auto"
            >
              <Button bg={"#9c3353"} color="white" mt="60px">
                Generate QR
              </Button>
            </Box>
            <Box>
              <Text>Scan & donate with any app</Text>
            </Box>
          </Box>
        </Hide>
      </Flex>
      <DonateModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Box>
  );
};

export default SingleDonate;
