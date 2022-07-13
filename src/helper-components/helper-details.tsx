import { ArrowDownIcon, SearchIcon } from "@chakra-ui/icons";
import Image from "next/image";
import {
  Icon,
  useBreakpointValue,
  Stack,
  Heading,
  VStack,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  HStack,
  Container,
  IconButton,
  Box,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import router from "next/router";
import { FiFilter } from "react-icons/fi";
import useUser from "../components/hooks/use-user";
import next from "next";

const HelperDetails = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  const { user } = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Добар ден, {user?.username}!</Heading>
        <Text>Подолу ќе најдеш,листа на услуги од други помошници.</Text>
      </VStack>
      <SimpleGrid column={2} columnGap={3} rowGap={10} w="full">
        <GridItem colSpan={colSpan}>
          <FormControl>
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  // eslint-disable-next-line react/no-children-prop
                  children={<SearchIcon color="gray.300" />}
                />
                <Input
                  type="search"
                  placeholder="Search"
                  focusBorderColor="green.500"
                />
              </InputGroup>
            </Stack>
          </FormControl>
        </GridItem>

        <GridItem colSpan={colSpan}>
          <HStack justifyContent="space-between">
            <ButtonGroup>
              <Button color="white" bg="#6B774B">
                Огласи
              </Button>
              <Button
                color="white"
                bg="#A9BB76"
                onClick={() => router.push("/profiles")}
              >
                Профили
              </Button>
            </ButtonGroup>
            {/* <Button leftIcon={<Icon as={FiFilter} />}>Филтер</Button> */}
            <Menu>
              <MenuButton
                as={Button}
                bg="white"
                colorScheme="whiteAlpha"
                color="black"
                leftIcon={<Icon as={FiFilter} />}
              >
                Филтер
              </MenuButton>
              <MenuList>
                <MenuItem>Цена</MenuItem>
                <MenuItem>Достапност</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </GridItem>

        <GridItem
          colSpan={colSpan}
          w="full"
          h="full"
          pl={5}
          pt={5}
          pr={5}
          mb={-5}
          alignItems="flex-start"
          bg="#F7FAFC"
          borderRadius={10}
        >
          <VStack>
            <VStack alignItems="flex-start">
              <Heading size="xs">МНМ КОМЕРЦ</Heading>
              <Text>Информации за помошникот</Text>
              <Text fontSize={14}>
                Mattis enim, vitae cursus pellentesque sed. Orci ultrices quis a
                lobortis. Vitae posuere pretium dolor egestas viverra nisi,
                fusce gravida dui. Diam nibh velit id pharetra, nisl neque
                sapien, nisl. Blandit sed sagittis adipiscing et in. Tempor,
                vitae a orci aliquet tellus, nisl, non. Viverra orci libero,
                quam donec nisi, hendrerit.
              </Text>

              <HStack justifyContent="space-between" pt={5}>
                <Heading size="xs">Цена:</Heading>
                <Text fontSize="sm">По договор</Text>
                <Heading size="xs" pl={5}>
                  Достапност:
                </Heading>
                <Text fontSize="sm">09:00ч до 21:00ч</Text>
                <Heading size="xs" pl={5}>
                  Локација:
                </Heading>
                <Text fontSize="sm">Куманово</Text>
              </HStack>
            </VStack>
          </VStack>
          <VStack alignItems="flex-end">
            <Button
              onClick={onOpen}
              bg="#E56262"
              color="white"
              _hover={{ bg: "#E53E3E" }}
              variant="ghost"
            >
              КОНТАКТИРАЈ
            </Button>
          </VStack>
        </GridItem>

        <GridItem
          colSpan={colSpan}
          w="full"
          h="full"
          pl={5}
          pt={5}
          pr={5}
          mb={-5}
          alignItems="flex-start"
          bg="#F7FAFC"
          borderRadius={10}
        >
          <VStack>
            <VStack alignItems="flex-start">
              <Heading size="xs">МНМ КОМЕРЦ</Heading>
              <Text>Информации за помошникот</Text>
              <Text fontSize={14}>
                Mattis enim, vitae cursus pellentesque sed. Orci ultrices quis a
                lobortis. Vitae posuere pretium dolor egestas viverra nisi,
                fusce gravida dui. Diam nibh velit id pharetra, nisl neque
                sapien, nisl. Blandit sed sagittis adipiscing et in. Tempor,
                vitae a orci aliquet tellus, nisl, non. Viverra orci libero,
                quam donec nisi, hendrerit.
              </Text>

              <HStack justifyContent="space-between" pt={5}>
                <Heading size="xs">Цена:</Heading>
                <Text fontSize="sm">По договор</Text>
                <Heading size="xs" pl={5}>
                  Достапност:
                </Heading>
                <Text fontSize="sm">09:00ч до 21:00ч</Text>
                <Heading size="xs" pl={5}>
                  Локација:
                </Heading>
                <Text fontSize="sm">Куманово</Text>
              </HStack>
            </VStack>
          </VStack>
          <VStack alignItems="flex-end">
            <Button
              onClick={onOpen}
              bg="#E56262"
              color="white"
              _hover={{ bg: "#E53E3E" }}
              variant="ghost"
            >
              КОНТАКТИРАЈ
            </Button>
          </VStack>
        </GridItem>

        <GridItem
          colSpan={colSpan}
          w="full"
          h="full"
          pl={5}
          pt={5}
          pr={5}
          mb={-5}
          alignItems="flex-start"
          bg="#F7FAFC"
          borderRadius={10}
        >
          <VStack>
            <VStack alignItems="flex-start">
              <Heading size="xs">МНМ КОМЕРЦ</Heading>
              <Text>Информации за помошникот</Text>
              <Text fontSize={14}>
                Mattis enim, vitae cursus pellentesque sed. Orci ultrices quis a
                lobortis. Vitae posuere pretium dolor egestas viverra nisi,
                fusce gravida dui. Diam nibh velit id pharetra, nisl neque
                sapien, nisl. Blandit sed sagittis adipiscing et in. Tempor,
                vitae a orci aliquet tellus, nisl, non. Viverra orci libero,
                quam donec nisi, hendrerit.
              </Text>

              <HStack justifyContent="space-between" pt={5}>
                <Heading size="xs">Цена:</Heading>
                <Text fontSize="sm">По договор</Text>
                <Heading size="xs" pl={5}>
                  Достапност:
                </Heading>
                <Text fontSize="sm">09:00ч до 21:00ч</Text>
                <Heading size="xs" pl={5}>
                  Локација:
                </Heading>
                <Text fontSize="sm">Куманово</Text>
              </HStack>
            </VStack>
          </VStack>
          <VStack alignItems="flex-end">
            <Button
              onClick={onOpen}
              bg="#E56262"
              color="white"
              _hover={{ bg: "#E53E3E" }}
              variant="ghost"
            >
              КОНТАКТИРАЈ
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader textAlign="center">Scan QR code</ModalHeader>
                <ModalCloseButton />
                <ModalBody textAlign="center">
                  <Image
                    alt="My user"
                    src={"/images/user-qr-code.png"}
                    height="300px"
                    width="300px"
                  />
                </ModalBody>
              </ModalContent>
            </Modal>
          </VStack>
        </GridItem>

        <GridItem colSpan={colSpan}>
          <Container>
            <VStack pl={0}>
              <IconButton
                bg="#A9BB76"
                color="white"
                size="md"
                fontSize={40}
                aria-label="See more"
                icon={<ArrowDownIcon />}
              />
              <Text>Види повеќе</Text>
            </VStack>
          </Container>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default HelperDetails;
