import { Container, Button, Flex, VStack, extendTheme, Stack, ChakraProvider, LightMode, GlobalStyle } from '@chakra-ui/react'
import HelperDetails from "../src/helper-components/helper-details";
import HelperCard from "../src/helper-components/helper-card";
import config from 'next/config'
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { Dict } from '@chakra-ui/utils'

const Helper = () => {

  const theme = extendTheme({
    config,
    styles: {
      global: (props: Dict<any> | StyleFunctionProps) => ({
        body: {
          bg: mode("gray.100", "black")(props),
        }
      })
    },
  })

  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.xl" p={0}  >
        <Flex
          h={{ base: "auto", md: "100vh" }}
          py={[0, 10, 20]}
          direction={{ base: "column-reverse", md: "row" }}
        >
          <HelperDetails />
          <VStack h="full" p={10} pt={160} spacing={10} alignItems="flex-start">
            <HelperCard />
          </VStack>
        </Flex>
      </Container>
    </ChakraProvider>
  );
};

export default Helper;
