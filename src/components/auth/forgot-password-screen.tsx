import {
  Text,
  Button,
  Heading,
  Input,
  Spacer,
  useToast,
  VStack,
  HStack,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const toast = useToast();
  const router = useRouter();

  const forgotPassword = async (email: string) => {
    try {
      const res = await axios.post(
        "http://localhost:1337/auth/local/forgot-password",
        {
          email: email,
        }
      );
      console.log(res);
      return res;
    } catch (e) {
      toast({
        title: "Authentication failed!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <VStack w="full" h="100vh" bgImage="/images/home-image.png">
      <VStack h="full" w="full" justify="center">
        <VStack
          h="fit-content"
          w="md"
          bg="white"
          textAlign="center"
          borderRadius={8}
          spacing={4}
          p={4}
          shadow="2xl"
        >
          <HStack w="full">
            <Tooltip label="Go back to Login">
              <IconButton
                onClick={() => router.push("/login")}
                colorScheme="gray"
                alignSelf="flex-start"
                aria-label="goBack"
                icon={<BiArrowBack />}
              ></IconButton>
            </Tooltip>

            <Heading pl={6} color="#93A560" as='h3' size='lg' >
              Заборавена лозинка? 
            </Heading>
          </HStack>
          <Text alignSelf="flex-start" color="gray">
            *Ве молиме внесете ја вашата e-mail адреса. Ќе добиете линк за да креирате нова лозинка преку e-mail.
          </Text>
          <Input
            placeholder="E-mail адреса"
            type="text"
            focusBorderColor='#93A560'
            onChange={(e) => setEmail(e.target.value)}
          />
          <Spacer />
          <Button
            w={48}
            bg="#93A560"
            _hover={{ bg:"#6B774B"}}
            color="white"
            onClick={async () => {
              const forgotStatus = await forgotPassword(email);
              if (forgotStatus) {
                router.push("/login");
              }
            }}
          >
            Испрати барање
          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default ForgotPasswordScreen;
