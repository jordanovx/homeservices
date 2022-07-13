import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { GiBroom } from "react-icons/gi";
import { BroomIcon } from "../../../public/icons/broom-icon";

type CardProps = {
  service_name: string;
  description: string;
  icon: JSX.Element;
};

const CategoryCard = ({ service_name, description, icon }: CardProps) => {
  return (
    <Box
      //onClick={} //should redirect to the category
      _hover={{ bg: "#93A560", mb: "56px" }}
      transitionProperty="all"
      transitionDuration="400ms"
      transitionTimingFunction="ease-out"
      bg="#6B774B"
      h={56}
      w={56}
      borderRadius={6}
    >
      <VStack h="full" w="full" p={5}>
        <Stack
          position="sticky"
          overflow="hidden"
          borderWidth={1}
          borderRadius={300}
          bg="blackAlpha.400"
          p={2}
        >
          {icon}
        </Stack>
        <Heading size="lg" color="white">
          {service_name}
        </Heading>
        <Text m={0} color="white" textAlign="start" fontSize={14} noOfLines={3}>
          {description}
        </Text>
      </VStack>
    </Box>
  );
};

export default CategoryCard;
