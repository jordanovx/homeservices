import { Image, useBreakpointValue, Stack, Heading, VStack, Text, SimpleGrid, GridItem, Button, HStack, AspectRatio } from "@chakra-ui/react";
import { useRouter } from 'next/router'
import StarRatingComponent from 'react-star-rating-component';

const HelperProfile = () => {
    const colSpan = useBreakpointValue({ base: 2, md: 1 })
    const router = useRouter();

    return (
        <VStack w="full" alignItems="flex-start" bg="gray.100">
            <SimpleGrid columns={[2, null, 2]} rowGap={20} style={{
                paddingBottom: 140,
                columnGap: 800
            }}>



                <GridItem colSpan={colSpan}>
                    <VStack alignItems="start">
                        <VStack >

                            <HStack alignItems="start" >


                                <Stack w="full" direction="row" justifyContent="space-between" >
                                    <VStack w="full" spacing={0} alignItems="start">
                                        <Heading size="2xl">Ивана </Heading>
                                        <Heading size="2xl">Јовановска</Heading>
                                        <HStack style={{
                                            marginTop: -40,
                                        }} pt={5}><Text fontSize={18} fontWeight="bold">RATING: </Text>
                                            <Text pt={2} fontSize={30}><StarRatingComponent
                                                name="rate1"
                                                starCount={5}
                                                value={2}
                                                starColor="#FF9529"
                                                emptyStarColor="gray"
                                            /></Text>
                                        </HStack>

                                    </VStack>
                                </Stack>
                            </HStack>
                        </VStack>

                    </VStack>
                </GridItem>
                <GridItem colSpan={colSpan} pb={5}>
                    <VStack alignItems="end">




                        <Stack spacing={0} w="full" direction="row" justifyContent="space-between" alignItems="end">
                            <Button style={{
                                width: 225,
                                height: 116,
                                fontSize: 30,
                                color: "white"
                            }} bg={"#B2C779"} _hover={{ bg: "#6B774B" }}>БУКИРАЈ</Button>
                        </Stack>


                    </VStack>
                </GridItem>
            </SimpleGrid>





            <SimpleGrid columns={[2, null, 2]} rowGap={10} style={{
                marginTop: -150,
            }}>
                <GridItem colSpan={colSpan}>

                    <VStack alignItems="flex-start" >
                        <HStack>
                            <AspectRatio pl={5} style={{
                                width: 333,
                                height: 333
                            }}>
                                <Image rounded="lg" src="images/Avatar.jpg" alt="photo"></Image>
                            </AspectRatio>
                        </HStack>


                    </VStack>
                </GridItem>

                <GridItem colSpan={colSpan} style={{
                    marginRight: -50

                }}>

                    <VStack alignItems="flex-start" >
                        <HStack>


                            <VStack alignItems="start" style={{


                            }}>
                                <Heading size="2xl" pb={4}>Чистач</Heading>
                                <HStack style={{
                                    marginTop: 10,
                                }}>
                                    <Text fontSize={20} fontWeight="bold">Локација: </Text>
                                    <Text fontSize={20}>Скопје,Македонија</Text>
                                </HStack>
                                <HStack style={{
                                    marginTop: 5,
                                }}>
                                    <Text fontSize={20} fontWeight="bold">Работно време: </Text>
                                    <Text fontSize={20}>09:00 до 21:00ч</Text>
                                </HStack>
                                <HStack style={{
                                    marginTop: 5,
                                }}>
                                    <Text fontSize={20} fontWeight="bold">Слободни термини: </Text>
                                    <Text fontSize={20}>Понеделник-Петок</Text>
                                </HStack>
                                <HStack style={{
                                    marginTop: 5,
                                }}>
                                    <Text fontSize={20} fontWeight="bold">Информации за услужни дејности:
                                    </Text>
                                </HStack>
                                <HStack style={{
                                    marginTop: 5,
                                }}>
                                    <Text fontSize={20} style={{
                                        width: 420,
                                    }}>Mattis enim,vitae,crusus pellentesques sed.
                                        Orci ultrices quis a lobortis.Vitae posuere pretium dolor egestas viverra nisi,
                                        fusce gravida dui</Text>
                                </HStack>


                            </VStack>

                        </HStack>


                    </VStack>
                </GridItem>
            </SimpleGrid>
            <SimpleGrid columns={[4, null, 4]} columnGap={10} rowGap={10} pt={10}>
                <GridItem colSpan={colSpan}>
                    <Text fontSize={30}>Оценки од претходни клиенти</Text>
                </GridItem>
            </SimpleGrid>


            <SimpleGrid columns={[3, null, 3]} columnGap={20} rowGap={20} style={{
                paddingBottom: 140,
            }}>



                <GridItem colSpan={colSpan}>
                    <VStack>
                        <VStack rounded="lg" bg="white" w={333} alignItems="start" pl={2} pt={5} pb={11} mb={-10} pr={10}>

                            <HStack alignItems="start" style={{ marginTop: 0 }}>
                                <AspectRatio ratio={1} w={24}>
                                    <Image src="images/Avatar.jpg" alt="photo"></Image>
                                </AspectRatio>

                                <Stack spacing={0} w="full" direction="row" justifyContent="space-between" alignItems="start" >
                                    <VStack w="full" spacing={0} alignItems="start">
                                        <Heading fontSize={15}>Ивана Јовановска</Heading>
                                        <Text fontSize={15}>Дадена оценка</Text>
                                        <HStack style={{
                                            marginTop: -10,
                                        }}>
                                            <Text pt={2} fontSize={17}><StarRatingComponent
                                                name="rate1"
                                                starCount={5}
                                                value={2}
                                                starColor="#FF9529"
                                                emptyStarColor="gray"
                                            /></Text>
                                        </HStack>

                                    </VStack>
                                </Stack>
                            </HStack>

                            <Text w={230} fontSize={14}>Pharetra in netus non dolor,vitae molestie at. Fringilla vhicula mattis quis lectus adipiscing ut.</Text>

                        </VStack>

                    </VStack>
                </GridItem>
                <GridItem colSpan={colSpan}>
                    <VStack>
                        <VStack rounded="lg" bg="white" w={333} alignItems="start" pl={2} pt={5} pb={11} mb={-10} pr={10}>

                            <HStack alignItems="start">
                                <AspectRatio ratio={1} w={24}>
                                    <Image src="images/Avatar.jpg" alt="photo"></Image>
                                </AspectRatio>

                                <Stack spacing={0} w="full" direction="row" justifyContent="space-between" alignItems="start">
                                    <VStack w="full" spacing={0} alignItems="start">
                                        <Heading fontSize={15}>Ивана Јовановска</Heading>
                                        <Text fontSize={15}>Дадена оценка</Text>
                                        <HStack style={{
                                            marginTop: -10,
                                        }}>
                                            <Text pt={2} fontSize={17}><StarRatingComponent
                                                name="rate1"
                                                starCount={5}
                                                value={2}
                                                starColor="#FF9529"
                                                emptyStarColor="gray"
                                            /></Text>
                                        </HStack>

                                    </VStack>
                                </Stack>
                            </HStack>

                            <Text w={230} fontSize={14}>Pharetra in netus non dolor,vitae molestie at. Fringilla vhicula mattis quis lectus adipiscing ut.</Text>

                        </VStack>



                    </VStack>
                </GridItem>

                <GridItem colSpan={colSpan}>
                    <VStack>
                        <VStack rounded="lg" bg="white" w={333} alignItems="start" pl={2} pt={5} pb={11} mb={-10} pr={10}>

                            <HStack alignItems="start">
                                <AspectRatio ratio={1} w={24}>
                                    <Image src="images/Avatar.jpg" alt="photo"></Image>
                                </AspectRatio>

                                <Stack spacing={0} w="full" direction="row" justifyContent="space-between" alignItems="start">
                                    <VStack w="full" spacing={0} alignItems="start">
                                        <Heading fontSize={15}>Ивана Јовановска</Heading>
                                        <Text fontSize={15}>Дадена оценка</Text>
                                        <HStack style={{
                                            marginTop: -10,
                                        }}>
                                            <Text pt={2} fontSize={17}><StarRatingComponent
                                                name="rate1"
                                                starCount={5}
                                                value={2}
                                                starColor="#FF9529"
                                                emptyStarColor="gray"
                                            /></Text>
                                        </HStack>

                                    </VStack>
                                </Stack>
                            </HStack>

                            <Text w={230} fontSize={14}>Pharetra in netus non dolor,vitae molestie at. Fringilla vhicula mattis quis lectus adipiscing ut.</Text>

                        </VStack>



                    </VStack>
                </GridItem>
            </SimpleGrid>



        </VStack>


    )
}

export default HelperProfile;