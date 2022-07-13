import { VStack, Image } from "@chakra-ui/react";

import { HomeCarousel } from "./carousel";
import MenuBar from "./menu-bar";

const HomeScreen = () => {
  return (
    <VStack
      h="full"
      w="full"
      align="stretch"
      justify="center"
      bgImage="url('/images/test-image.jpeg')"
      backgroundSize="cover"
    >
      <MenuBar />
      <HomeCarousel />
    </VStack>
  );
};

export default HomeScreen;
