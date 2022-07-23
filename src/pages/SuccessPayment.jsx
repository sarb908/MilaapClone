import { VStack, Button, Heading, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function SuccessPayment() {
  const navigate = useNavigate();
  return (
    <>
      <VStack gap="15px" textAlign="center" py={10} px={6} h="50vh">
        <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Congratulations Payment Successful
        </Heading>
        <Text color={"gray.500"}>Hooray! You have completed you payment</Text>
        <Button onClick={() => navigate("/")} colorScheme={"green"}>
          Home
        </Button>
      </VStack>
      <Footer />
    </>
  );
}
