import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";
import CartProducts from "./CartProducts";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCartItemsHandler } from "../../store/CartReducer/action";
export default function CartModal({ isOpen, onOpen, onClose }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  useEffect(() => {
    if (cartItems.length === 0) {
      dispatch(getCartItemsHandler());
    }
  }, []);

  return (
    <>
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
            border="none"
            borderRadius="50%"
            size="sm"
            m="auto"
          />

          <ModalBody gap="10px">
            {cartItems &&
              cartItems.map((item) => <CartProducts key={item.id} {...item} />)}
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
