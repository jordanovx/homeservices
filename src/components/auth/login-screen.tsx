import {
  VStack,
  Button,
  Input,
  Heading,
  Spacer,
  Link,
  useToast,
  HStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const toast = useToast();

  const handleUsername = (event: any) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const login = async (username: string, password: string) => {
    try {
      const res = await axios.post("http://localhost:1337/api/auth/local", {
        identifier: username,
        password: password,
      });
      console.log(res);
      return res;
    } catch (e: any) {
      toast({
        title: "Authentication failed!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <VStack w="full" h="100vh" bgImage="url('/images/home-image.jpg')">
      <VStack h="full" w="full" justify="center">
        <VStack
          h={500}
          w="lg"
          bg="white"
          textAlign="center"
          borderRadius={8}
          spacing={10}
          p={14}
          shadow="2xl"
        >
          <Heading color="#93A560">Најави се</Heading>
          <Input
            placeholder="e-mail адреса"
            type="text"
            focusBorderColor="#93A560"
            onChange={handleUsername}
          />
          <Input
            placeholder="лозинка"
            type="password"
            focusBorderColor="#93A560"
            onChange={handlePassword}
          />
          <HStack w="full" justify="space-evenly">
            <NextLink href="/forgot-password" passHref>
              <Link color="blue" lineHeight="7">
                Заборавена лозинка?
              </Link>
            </NextLink>
            <NextLink href="/register" passHref>
              <Link color="blue" lineHeight="7">
                Регистрација
              </Link>
            </NextLink>
          </HStack>
          <Spacer />
          <Button
            w={48}
            bg="#93A560"
            _hover={{ bg: "#6B774B" }}
            color="white"
            onClick={async () => {
              const res = await login(username, password);
              if (res?.data.user.Role === "Helper") {
                router.push("/helper");
              }
              if (res?.data.user.Role === "Client") {
                router.push("/client");
              }
            }}
          >
            Најави се
          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
};
