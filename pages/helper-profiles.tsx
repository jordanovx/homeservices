import { Container, Button, Flex, VStack, extendTheme, Stack, ChakraProvider, LightMode, GlobalStyle } from '@chakra-ui/react'
import config from 'next/config';
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { Dict } from '@chakra-ui/utils';
import HelperProfile from '../src/helper-components/helper-profile';


const HelperProfiles = () => {

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
            <Container maxW="container.xl" p={0} bg="gray.100">
                <Flex h={{ base: 'auto', md: '100vh' }} py={[0, 10, 20]} direction={{ base: 'column-reverse', md: 'row' }}>
                    <HelperProfile />
                </Flex>
            </Container>
        </ChakraProvider>
    );
}


export default HelperProfiles;
