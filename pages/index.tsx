import { VStack, Text, HStack, Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import Image from "next/image";
import { BroomIcon } from "../public/icons/broom-icon";
import CategoryCard from "../src/components/cards/category-card";
import HomeScreen from "../src/components/home-screen/home-screen";

const Home: NextPage = () => {
  return (
    <>
      <HomeScreen />
    </>
  );
};

export default Home;
