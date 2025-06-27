import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

const DishCard = ({ title, price, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack bg="white" rounded="md" overflow="hidden">
        <Image src={imageSrc} rounded="md" width="100%" height={200} objectFit="cover"/>
        <VStack alignItems="flex-start" p={4}>
            <HStack justify="space-between" width="100%">
                <Heading size="sm" color="black">{title}</Heading>
                <Text color="gray.600">{price}</Text>
            </HStack>
            <Text color="gray.600">{description}</Text>
            <HStack spacing={2} alignSelf="flex-start">
                <Text color="black">Order a delivery</Text>
            </HStack>
        </VStack>
    </VStack>)
};

export default DishCard;
