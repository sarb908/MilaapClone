import { Flex, Box, Text, Center, Heading, Button } from '@chakra-ui/react'
import React from 'react'
import { AiFillRightCircle } from "react-icons/ai"
import HomePageFund from './HomePageFund'
const Home = () => {
  return (
    <div>
        <Box h={"550px"} maxH={"680px"} w={"100%"} bgImage="url('https://cimages.milaap.org/milaap/image/upload/v1655996033/production/entity_details/milaap_page/524/Desktop_img_2__5__1655996032.jpg')" bgPos={"right"} bgRepeat={"no-repeat"}>
            <Center>
                <Box mt={"10px"} shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} minH={"45px"} w={"60%"}>
                    <Flex justifyContent={"space-evenly"} alignItems={"center"} lineHeight={2}>
                        <Text fontSize={"18px"}>
                            7-Year-Old With Rapidly Growing Facial Tumour Needs Urgent Surgery
                        </Text>
                        <Box>
                            <AiFillRightCircle color='#9c3353' style={{height:"28px" ,width: "35px"}} />
                        </Box>        
                    </Flex>
                </Box>
            </Center>
            <Box textAlign={"left"} ml={{base: 0, md: "3%", lg: "8%"}} mt={"6%"}>
                <Heading>Milaap</Heading>
                <Text mt={"1%"} mb={"2%"} fontSize={"32px"}>Free Crowdfunding for India</Text>
                <Text fontSize={"20px"} noOfLines={4}>Raise funds online for medical emergencies<br /> and social causes</Text>
                <Button color={"white"} bgColor={"#9c3353"} fontSize={"21px"} mt={"1%"} borderRadius={"25px"} padding={"2%"}>Start a fundraiser - it's FREE</Button>
                <Flex w={"40%"} justifyContent={"space-around"} mt={"3%"} fontSize={"20px"}>
                    <Box>
                        <Text as={"b"} color={"#9c3353"}>665,000+</Text><br />
                        <Text>Fundraisers</Text>
                    </Box>
                    <hr style={{height: "50px", marginTop:"2px", border:"1px solid #9c3353"}} />
                    <Box>
                        <Text as={"b"} color={"#9c3353"}>665,000+</Text><br />
                        <Text>Raised</Text>
                    </Box>
                    <hr style={{height: "50px", marginTop:"2px", border:"1px solid #9c3353"}} />
                    <Box>
                        <Text as={"b"} color={"#9c3353"}>665,000+</Text><br />
                        <Text>Donations</Text>
                    </Box>
                </Flex>
            </Box>
            <Center  mt={"5%"}>            
                <Box shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} minH={"70px"} w={"70%"}>
                    <Flex justifyContent={"space-between"} alignItems={"center"}>
                        <hr style={{minHeight:"70px", width:"4px", border: "1px solid #9c3353", backgroundColor:"#9c3353"}} />
                        <Box>
                            <Flex>
                                <Text fontSize={"2xl"}>Our crowdfunding platform charges NO fees</Text>
                            </Flex>
                        </Box>
                        <Text as={"b"} fontSize={"5xl"} color={"#9c3353"}>0%</Text>
                    </Flex>
                </Box>  
            </Center>
        </Box>
        <HomePageFund />
    </div>
  )
}

export default Home