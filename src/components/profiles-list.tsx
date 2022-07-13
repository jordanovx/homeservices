import { ArrowDownIcon, SearchIcon, UpDownIcon } from "@chakra-ui/icons";
import {
  Icon,
  Image,
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
  AspectRatio,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import { BookmarkStarFill } from 'react-bootstrap-icons';
import { FiArrowRight, FiFilter } from "react-icons/fi";
import StarRatingComponent from "react-star-rating-component";
import useUser from "./hooks/use-user";

const ProfilesList = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  const router = useRouter();
  const { user } = useUser();

  return (
    <VStack w="full" p={10} spacing={10} alignItems="flex-start" bg="gray.100">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Добар ден, {user?.username}!</Heading>
        <Text>Подолу ќе најдеш,листа на услуги од други помошници.</Text>
      </VStack>
      <SimpleGrid column={2} columnGap={3} rowGap={10} w="full">
        <GridItem colSpan={colSpan} rounded="lg" bg="white">
          <FormControl bg="white">
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
            <HStack>
              <ButtonGroup>
                <Button
                  onClick={() => router.push("/helper")}
                  rounded="lg"
                  bg="#A9BB76"
                  color="white"
                >
                  Огласи
                </Button>

                <Button
                  onClick={() => router.push("/profiles")}
                  rounded="lg"
                  bg="#6B774B"
                  color="white"
                >
                  Профили
                </Button>
              </ButtonGroup>
            </HStack>

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
      </SimpleGrid>

      <SimpleGrid columns={[2, null, 2]} columnGap={10} rowGap={10}>
        <GridItem colSpan={colSpan}>
          <VStack>
            <VStack
              rounded="lg"
              bg="white"
              w={333}
              alignItems="start"
              pl={2}
              pt={5}
              pb={11}
              mb={-10}
              pr={10}
            >
              <VStack justifyContent="end" pl={272}>
                <BookmarkStarFill
                  fontSize={60}
                  style={{
                    marginTop: -32,
                    marginBottom: -28,
                    color: "#EEDE4A",
                  }}
                />
              </VStack>
              <HStack alignItems="start" style={{ marginTop: 0 }}>
                <AspectRatio ratio={1} w={24}>
                  <Image src="images/Avatar.jpg" alt="photo"></Image>
                </AspectRatio>

                <Stack
                  spacing={0}
                  w="full"
                  direction="row"
                  justifyContent="space-between"
                  alignItems="start"
                >
                  <VStack w="full" spacing={0} alignItems="start">
                    <Heading fontSize={15}>Ивана Јовановска</Heading>
                    <Text fontSize={15}>Чистач</Text>
                    <HStack
                      style={{
                        marginTop: -10,
                      }}
                    >
                      <Text fontSize={13}>Rating: </Text>
                      <Text pt={2} fontSize={17}>
                        <StarRatingComponent
                          name="rate1"
                          starCount={5}
                          value={3}
                          starColor="#FF9529"
                          emptyStarColor="gray"
                        />
                      </Text>
                    </HStack>
                  </VStack>
                </Stack>
              </HStack>

              <Text w={230} fontSize={14}>
                Pharetra in netus non dolor,vitae molestie at. Fringilla vhicula
                mattis quis lectus adipiscing ut.
              </Text>
            </VStack>

            <VStack justifyContent="end" pl={293}>
              <IconButton
                onClick={() => router.push("/helper-profiles")}
                bg={"#B2C779"}
                _hover={{ bg: "#6B774B" }}
                color="white"
                size="md"
                fontSize={30}
                aria-label="See more"
                icon={<FiArrowRight />}
              />
            </VStack>
          </VStack>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <VStack>
            <VStack
              rounded="lg"
              bg="white"
              w={333}
              alignItems="start"
              pl={2}
              pt={5}
              pb={11}
              mb={-10}
              pr={10}
            >
              <HStack alignItems="start">
                <AspectRatio ratio={1} w={24}>
                  <Image src="images/Avatar.jpg" alt="photo"></Image>
                </AspectRatio>

                <Stack
                  spacing={0}
                  w="full"
                  direction="row"
                  justifyContent="space-between"
                  alignItems="start"
                >
                  <VStack w="full" spacing={0} alignItems="start">
                    <Heading fontSize={15}>Ивана Јовановска</Heading>
                    <Text fontSize={15}>Читач</Text>
                    <HStack
                      style={{
                        marginTop: -10,
                      }}
                    >
                      <Text fontSize={13}>Rating: </Text>
                      <Text pt={2} fontSize={17}>
                        <StarRatingComponent
                          name="rate1"
                          starCount={5}
                          value={5}
                          starColor="#FF9529"
                          emptyStarColor="gray"
                        />
                      </Text>
                    </HStack>
                  </VStack>
                </Stack>
              </HStack>

              <Text w={230} fontSize={14}>
                Pharetra in netus non dolor,vitae molestie at. Fringilla vhicula
                mattis quis lectus adipiscing ut.
              </Text>
            </VStack>

            <VStack justifyContent="end" pl={293}>
              <IconButton
                onClick={() => router.push("/helper-profiles")}
                bg={"#B2C779"}
                _hover={{ bg: "#6B774B" }}
                color="white"
                size="md"
                fontSize={30}
                aria-label="See more"
                icon={<FiArrowRight />}
              />
            </VStack>
          </VStack>
        </GridItem>

        <GridItem colSpan={colSpan}>
          <VStack>
            <VStack
              rounded="lg"
              bg="white"
              w={333}
              alignItems="start"
              pl={2}
              pt={5}
              pb={11}
              mb={-10}
              pr={10}
            >
              <HStack alignItems="start">
                <AspectRatio ratio={1} w={24}>
                  <Image src="images/Avatar.jpg" alt="photo"></Image>
                </AspectRatio>

                <Stack
                  spacing={0}
                  w="full"
                  direction="row"
                  justifyContent="space-between"
                  alignItems="start"
                >
                  <VStack w="full" spacing={0} alignItems="start">
                    <Heading fontSize={15}>Ивана Јовановска</Heading>
                    <Text fontSize={15}>Читач</Text>
                    <HStack
                      style={{
                        marginTop: -10,
                      }}
                    >
                      <Text fontSize={13}>Rating: </Text>
                      <Text pt={2} fontSize={17}>
                        <StarRatingComponent
                          name="rate1"
                          starCount={5}
                          value={1}
                          starColor="#FF9529"
                          emptyStarColor="gray"
                        />
                      </Text>
                    </HStack>
                  </VStack>
                </Stack>
              </HStack>

              <Text w={230} fontSize={14}>
                Pharetra in netus non dolor,vitae molestie at. Fringilla vhicula
                mattis quis lectus adipiscing ut.
              </Text>
            </VStack>

            <VStack justifyContent="end" pl={293}>
              <IconButton
                onClick={() => router.push("/helper-profiles")}
                bg={"#B2C779"}
                _hover={{ bg: "#6B774B" }}
                color="white"
                size="md"
                fontSize={30}
                aria-label="See more"
                icon={<FiArrowRight />}
              />
            </VStack>
          </VStack>
        </GridItem>

        <GridItem colSpan={colSpan}>
          <VStack>
            <VStack
              rounded="lg"
              bg="white"
              w={333}
              alignItems="start"
              pl={2}
              pt={5}
              pb={11}
              mb={-10}
              pr={10}
            >
              <HStack alignItems="start">
                <AspectRatio ratio={1} w={24}>
                  <Image src="images/Avatar.jpg" alt="photo"></Image>
                </AspectRatio>

                <Stack
                  spacing={0}
                  w="full"
                  direction="row"
                  justifyContent="space-between"
                  alignItems="start"
                >
                  <VStack w="full" spacing={0} alignItems="start">
                    <Heading fontSize={15}>Ивана Јовановска</Heading>
                    <Text fontSize={15}>Чистач</Text>
                    <HStack
                      style={{
                        marginTop: -10,
                      }}
                    >
                      <Text fontSize={13}>Rating: </Text>
                      <Text pt={2} fontSize={17}>
                        <StarRatingComponent
                          name="rate1"
                          starCount={5}
                          value={2}
                          starColor="#FF9529" /* color of selected icons, default `#ffb400` */
                          emptyStarColor="gray"
                        />
                      </Text>
                    </HStack>
                  </VStack>
                </Stack>
              </HStack>

              <Text w={230} fontSize={14}>
                Pharetra in netus non dolor,vitae molestie at. Fringilla vhicula
                mattis quis lectus adipiscing ut.
              </Text>
            </VStack>

            <VStack justifyContent="end" pl={293}>
              <IconButton
                onClick={() => router.push("/helper-profiles")}
                bg={"#B2C779"}
                _hover={{ bg: "#6B774B" }}
                color="white"
                size="md"
                fontSize={30}
                aria-label="See more"
                icon={<FiArrowRight />}
              />
            </VStack>
          </VStack>
        </GridItem>
      </SimpleGrid>
      <SimpleGrid column={2} columnGap={3} rowGap={10} w="full">
        <GridItem colSpan={colSpan}>
          <Container>
            <VStack pl={0}>
              <IconButton
                bg={"#B2C779"}
                _hover={{ bg: "#6B774B" }}
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

export default ProfilesList;
