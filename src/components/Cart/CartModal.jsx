import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";
import CartProducts from "./CartProducts";
import { CloseIcon } from "@chakra-ui/icons";

export default function CartModal({ onClick }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontSize="18px"
            fontWeight={"300"}
            lineHeight="31px"
            color="#5d5d5d"
          >
            Your Basket
          </ModalHeader>
          <ModalCloseButton
            bg="#eaeaea"
            color="white"
            borderRadius="50%"
            size="sm"
            m="auto"
          />

          <ModalBody gap="10px">
            <CartProducts />
            <CartProducts />

            <CartProducts />

            <CartProducts />

            <CartProducts />
            <CartProducts />
            <CartProducts />
            <CartProducts />
            <CartProducts />
            <CartProducts />
          </ModalBody>

          <ModalFooter>
            <Flex w="100%" justify={"space-between"} alignItems="center">
              <Button
                variant="ghost"
                fontSize="13px"
                fontWeight={"400"}
                borderRadius="20px"
                _hover={{ textDecoration: "underline", boxShadow: "dark-lg" }}
                color="#9c3353"
                onClick={onClose}
              >
                Add More Loan
              </Button>
              <Flex alignItems="center" gap="10px">
                <Text>Total:2341</Text>
                <Button
                  variant="solid"
                  bg="#9c3353"
                  color="white"
                  fontSize="14px"
                  borderRadius="20px"
                  fontWeight="500"
                  _hover={{ boxShadow: "dark-lg" }}
                >
                  Pay Now
                </Button>
              </Flex>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
