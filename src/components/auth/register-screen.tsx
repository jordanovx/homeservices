import { useState } from "react";
import {
  VStack,
  Heading,
  Input,
  Spacer,
  Button,
  useToast,
  HStack,
  IconButton,
  Tooltip,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import axios from "axios";
import { BiArrowBack } from "react-icons/bi";
import { BsHouse } from "react-icons/bs";

const RegisterScreen = () => {
  const [role, setRole] = useState("client");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const toast = useToast();

  console.log("check role", role);

  const register = async (
    username: string,
    email: string,
    password: string
  ) => {
    try {
      if (password !== confirmPassword) {
        toast({
          title: "Passwords do not match!",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      const res = await axios.post(
        "http://localhost:1337/auth/local/register",
        {
          username: username,
          email: email,
          password: password,
        }
      );
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
    <VStack w="full" h="100vh" bgImage="/images/home-image1.png">
      <VStack h="full" w="full" justify="center">
        <VStack
          h={500}
          w="lg"
          bg="white"
          textAlign="center"
          borderRadius={8}
          spacing={6}
          p={14}
          shadow="2xl"
        >
          <HStack w="full">
            <Tooltip label="">
              <IconButton
                onClick={() => router.push("/login")}
                colorScheme="gray"
                alignSelf="flex-start"
                aria-label="goBack"
                icon={<BiArrowBack />}
              ></IconButton>
            </Tooltip>
            <Tooltip label="Врати се на почетната страница">
              <IconButton
                onClick={() => router.push("/")}
                colorScheme="gray"
                alignSelf="flex-start"
                aria-label="goBack"
                icon={<BsHouse />}
              ></IconButton>
            </Tooltip>
            <Heading pl={10} color="#93A560">
              Регистрација
            </Heading>
          </HStack>
          <Input h={40}
            placeholder="Корисничко име"
            type="text"
            focusBorderColor='#93A560'
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input h={40}
            placeholder="E-mail адреса"
            type="text"
            focusBorderColor='#93A560'
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input h={40}
            placeholder="Лозинка"
            type="password"
            focusBorderColor='#93A560'
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input h={40}
            placeholder="Потврди Лозинка"
            type="password"
            focusBorderColor='#93A560'
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <RadioGroup onChange={setRole} value={role} colorScheme="green">
            <Stack direction="row">
              <Radio value="client">Client</Radio>
              <Radio value="servicer">Servicer</Radio>
            </Stack>
          </RadioGroup>
          <Button
            w={48}
            h={60}
            bg="#93A560"
            _hover={{ bg:"#6B774B"}}
            color="white"
            onClick={async () => {
              const registerStatus = await register(username, email, password);
              if (registerStatus) {
                router.push("/login");
              }
            }}
          >
            Регистрација
          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default RegisterScreen;
