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
import { userRoles } from "../src/constants";

export const LoginPage = () => {
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
    const loginInfo = {
      identifier: username,
      password: password,
    };

    const response = await fetch("http://localhost:1337/api/auth/local", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    });
    if (response.status !== 200) {
      toast({
        description: "Invalid credentials!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      const loginResponse = await response.json();
      window.localStorage.setItem("token", loginResponse.jwt);
      window.localStorage.setItem("user", JSON.stringify(loginResponse.user));
      const { user } = loginResponse;
      console.log(user);
      if (user.Role === userRoles.client) {
        router.push("/client");
      }
      if (user.Role === userRoles.helper) {
        router.push("/helper");
      }
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
            onClick={() => login(username, password)}
          >
            Најави се
          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default LoginPage;
