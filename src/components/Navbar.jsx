
// import React from "react";
// import { Flex } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// const Navbar = () => {
//   return (
//     <Flex justify={"space-around"}>
//       <Link to="/">Home</Link>
//       <Link to="/donate">Donate</Link>
//       <Link to="/lend">Lend</Link>
//       <Link to="/pricing">Pricing</Link>
//       <Link to="/contactUs">contact us</Link>
//     </Flex>

    
//   );
// };

// export default Navbar;

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Switch,
  Stack,
  Collapse,
  Icon,
  Popover,
  useColorMode,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  Image,
  Link,
  useBreakpointValue,
  useDisclosure,
  ColorModeScript
} from '@chakra-ui/react';

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import React , {useState} from "react"

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box height={'60px'}
   z-index={'1000'}>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={'none'}
        boxShadow={'0 0 30px 0 rgb(156 51 83 / 20%);'}
        borderStyle={'solid'}
        margin={'-10px 0 -5px 0'}
        paddingBottom={'-8px'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} align={'center'}>
          <Image height="40px" src="https://assets.milaap.org/assets/milaap-logo-tiny-4d3dbc4e55c2aaec351f0f376329c624236c4d6266b910f472684e70603f600d.png"/>

          <Flex display={{ base: 'none', md: 'flex' }} height={'70px'} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
        height={'70px'}
        align={'center'}
          flex={{ base: 1, md: 0 }}
          paddingRight={'50px'}
          justify={'flex-end'}
          direction={'row'}
          spacing={120}>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'20px'}
            height={'45px'}
            borderRadius={'50px'}
            width={'230px'}
            cursor={'pointer'}
            marginLeft={'-25px'}
            // padding={'4px'}
            fontWeight={600}
            color={'white'}
            bg={'#9c3353'}
            href={'#'}
            _hover={{
              boxShadow:"0 3px 3px 0 rgb(0 0 0 / 14%), 0 1px 7px 0 rgb(0 0 0 / 12%), 0 3px 1px -1px rgb(0 0 0 / 20%)"
            }}>
            Start a Fundraiser
          </Button>
         <Box>
          <Link 
          href={"/users/sign-up"}>
          <i class='far fa-user-circle' style={{color:"#9c3353", fontSize:"40px", fontWeight:"1px"}}></i></Link>
         </Box>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  const [colorCode, setColorCode] = useState("white");
  const [clr, setClr] = useState("#212121")


  return (
    <Stack direction={'row'} spacing={7} align={'center'} height={'70px'}>
      {NAV_ITEMS.map((navItem) => (
        <Box 
        bg={`${colorCode}`}
        onClick={() => {
          setColorCode("#9c3353");
          setClr("white")
        }}
        height={"70px"} align={"center"} 
        padding={"20px 5px 0px 5px"}
        // bg={'white'}
        // onClick={()=>{
        //   if(bg=="white"){
        //     bg="green";
        //   }
        // }}
        _hover={{
          textDecoration: 'none',
          height:"70px",
          align:"center",
          color: linkHoverColor,
          bg:"#f5f5f0"
        }}
        
        key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'} >
            <PopoverTrigger>
              <Link 
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'16px'}
                fontWeight={500}
                //color={`${clr}`}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor
                }}
               >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'16px'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
      <Switch size='lg' colorScheme='pink'/>
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
 
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'16px'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'} >
        <Box >
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}
            fontSize={'16px'}>
            {label}
          </Text>
          <Text fontSize={'md'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>

  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
        font-family={'AvenirLTPro-Medium'}>
        <Text
          fontWeight={600}
          _hover={{
            bg:"#9c3353",
            color:"white",
            width:"100%",
            display:"flex",
            padding:"10px 0 0 10px",
            height:"50px"
          }}
          color={useColorModeValue('#9c3353', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Donate',
    href: '/donate'
  },
  {
    label: 'Lend',
    href: '/lend',
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
  {
    label: 'Contact Us',
    href: '/contactUs',
  },
];
