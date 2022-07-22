import { Flex, Box, Text, Center, Heading, Button, Image, Popover, PopoverTrigger,PopoverContent,PopoverHeader,PopoverArrow,PopoverCloseButton,PopoverBody } from '@chakra-ui/react'
import React from 'react'
import { AiFillRightCircle } from "react-icons/ai"
import { BsTelephone } from "react-icons/bs"
import { Link } from 'react-router-dom'
import HomePageFund from './HomePageFund'
// import { useRef } from 'react'
const Home = () => {
    const initialFocusRef = React.useRef()
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
                        <Text mr={"2%"} as={"b"} fontSize={"5xl"} color={"#9c3353"}>0%</Text>
                    </Flex>
                </Box>  
            </Center>
        </Box>
        <HomePageFund />
        <Center>
            <Link to="/donate">
                <Text as={"u"} fontSize={"20px"} color={"#9c3353"}>See more fundraisers</Text>
            </Link>
        </Center>
        <Center>
            <Box w={"80%"} minH={"350px"} mt={"4%"} shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}>
                <Flex justifyContent={"space-around"} wrap={"wrap"} mt={"3%"}>
                    <Box w={"30%"}>
                       <Image src='./img1.png' height={"350px"} />
                    </Box>
                    <Box w={"68%"}>
                        <Text as={"b"} fontSize={"20px"}>
                            Milaap app - fundraise and donate<br /> seamlessly!
                        </Text>
                        <Text mt={"2%"} mb={"2%"}>
                        Set up and manage your fundraiser or donate to different<br /> causes from your mobile at anytime and from anywhere
                        </Text>
                        <Center>
                            <Image src="./img2.png" />
                        </Center>
                        <Center>
                            <Text mt={"2%"}>
                                Scan the QR Code to download app.
                            </Text>
                        </Center>
                        <Center>
                            <Flex mt={"2%"} mb={"4%"} justifyContent={"space-evenly"} wrap={"wrap"} gap={"10px"}>
                                <a href='https://play.google.com/store/apps/details?id=org.milaap.app.android&utm_source=homepage_download_app&utm_medium=desktop'><Image src='https://assets.milaap.org/assets/play-store-btn-3cb8952867b0552ef1377bf63004d9d6613fd11da71e8446e7e6be1fd61f3182.png' /></a>
                                <a href='https://apps.apple.com/in/app/milaap/id1571562098?utm_source=homepage_download_app&utm_medium=desktop'><Image src='https://assets.milaap.org/assets/app-store-btn-0ae1713b1521ee08942a97e257b38ac5050a6cf70df4084b3f4ab234e60ea51f.png' /></a>
                            </Flex>
                        </Center>
                    </Box>
                </Flex>
            </Box>
        </Center>
        <Box w={"100%"} minH={"120px"} bgColor={"#9c3353"} mt={"4%"}>
            <Center>
            <Box mt={"2%"} minH={"80px"} w={"85%"} borderRadius={"12px"} shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} bgColor={"whitesmoke"}>
                <Flex mt={"1%"} alignItems={"center"} justifyContent={"space-around"}>
                    <Text fontSize={"25px"}>
                        Need help to setup your free fundraiser?
                    </Text>
                    <Popover backdropBlur={"3xl"} initialFocusRef={initialFocusRef} placement="right-start" closeOnBlur={false}>
                        <PopoverTrigger>
                            <Button mt={"3px"} bgColor={"#9c3353"} color={"whitesmoke"} padding={"2%"} fontSize={"20px"}>
                                <Flex justifyContent={"space-between"} gap={"10px"}>
                                    <BsTelephone />
                                    <Text>
                                        Request a call
                                    </Text>
                                </Flex>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent w={"80%"} h={"550px"} color='black' bg='white' borderColor='white'>
                            <Center>
                                <PopoverHeader pt={4} fontWeight='bold' border='0' w={"40%"}>
                                    <Flex justifyContent={"space-around"}>
                                        <Image src='https://assets.milaap.org/assets/logo-b116caabc9aa15dcaab7a338d390d3c8d630933474a3be5822d22bb6d617706b.png' h={"40px"} />
                                        <Text mt={"9%"}>Milaap</Text>                                       
                                    </Flex>  
                                </PopoverHeader>
                            </Center>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody>
                                <Text>Raise funds online with Milaap</Text>
                                <Box>
                                    <Heading>Fill your details & we will connect with you shortly</Heading>
                                    <input type="text" placeholder='Name' /><br />
                                    <label>+91</label>
                                    <input type="number" placeholder='Phone Number' /><br />
                                    <label>We will contact you on this number </label><br />
                                </Box>
                                <Button bgColor={"#9c3353"} color={"white"}>Submit</Button>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </Flex>
                </Box>
        </Center>
        </Box>    
    </div>
  )
}

export default Home