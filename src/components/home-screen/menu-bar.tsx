import {
  HStack,
  Text,
  Button,
  VStack,
  Flex,
  Spacer,
  Box,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { PageContent } from "./page-content";
import { Logo } from "../../../public/icons/logo";
import useUser from "../hooks/use-user";

const MenuBar = () => {
  const router = useRouter();

  //Proverka ako korisnikot e logiran, kopceto login treba da bide disabled
  const userCheck = useUser();

  return (
    <VStack spacing={24} color={"white"}>
      <HStack justify="center" width="full">
        <Box w="full" h="full">
          <Flex w="full" gap={30} p={3}>
            <Box w="220px" pl={5}>
              <Logo href="#" cursor="pointer" />
            </Box>

            <Spacer />
            <Box>
              <Text m={3}>Клиент</Text>
            </Box>
            <Box>
              <Text m={3}>Зошто ние?</Text>
            </Box>
            <Box>
              <Text m={3}>Контакт</Text>
            </Box>

            <Spacer />

            <Box pr={5}>
              <Button
                _hover={{ bg: "#6B774B" }}
                variant="ghost"
                isDisabled={!Boolean(userCheck)}
                onClick={() => router.push("/login")}
              >
                Најава
              </Button>

              <Button
                bgColor={"#93A560"}
                _hover={{ bg: "" }}
                onClick={() => router.push("/register")}
              >
                Регистрација
              </Button>
            </Box>
          </Flex>
        </Box>
      </HStack>
      <PageContent />
    </VStack>
  );
};

export default MenuBar;
