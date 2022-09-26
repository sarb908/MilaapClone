import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  RadioGroup,
  Stack,
  Radio
} from "@chakra-ui/react";

const RefineSearch = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [value, setValue] = React.useState("1");

   return (
     <>
       <Button
         ref={btnRef}
         variant="outline"
         color={"#9c3353"}
         onClick={onOpen}
         borderRadius="20px"
       >
         Refine Search
       </Button>
       <Drawer
         isOpen={isOpen}
         placement="right"
         onClose={onClose}
         finalFocusRef={btnRef}
       >
         <DrawerOverlay />
         <DrawerContent>
           <DrawerCloseButton />
           <DrawerHeader>Filter & Sort</DrawerHeader>

           <DrawerBody>
             <RadioGroup onChange={setValue} value={value}>
               <Stack direction="row">
                 <Radio value="1">First</Radio>
                 <Radio value="2">Second</Radio>
               </Stack>
             </RadioGroup>
           </DrawerBody>

           <DrawerFooter>
             <Button variant="outline" mr={3} onClick={onClose}>
               Cancel
             </Button>
             <Button colorScheme="blue">Apply</Button>
           </DrawerFooter>
         </DrawerContent>
       </Drawer>
     </>
   );
}

export default RefineSearch