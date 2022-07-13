import { Heading, HStack, Stack, Spacer } from "@chakra-ui/react";
import { BroomIcon } from "../../../public/icons/broom-icon";
import { CookIcon } from "../../../public/icons/cook-icon";
import { ElectricCable } from "../../../public/icons/electric-cable";
import CategoryCard from "../cards/category-card";


export const HomeCarousel = () => {
  return (
    <Stack h="full" w="full" p={10} bg="blackAlpha.400">
      <HStack w="full" h="full" justify="flex-end" pl={48} pr={12} spacing={10}>
        <Heading fontWeight="extrabold" size="4xl" color="white" maxW={330} maxH={80}>
          Листа од услуги кои ги нудиме
        </Heading>
        <Spacer />
        <CategoryCard
          service_name="Хемичар"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          icon={<BroomIcon />}
        />
        <CategoryCard
          service_name="Електричар"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          icon={<ElectricCable />}
        />
        <CategoryCard
          service_name="Готвач"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          icon={<CookIcon />}
        />
      </HStack>
    </Stack>
  );
};
