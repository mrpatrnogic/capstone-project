import { VStack, Image, Stack, Text, Heading, Box } from '@chakra-ui/react';
import about1 from '../Images/about1.jpg'
import about2 from '../Images/about2.jpg'

const AboutSection = () => {
    return (
        <Stack width="100%" bgColor="gray.600" alignItems="center">
            <Stack direction={{ base: 'column', md: 'row' }} spacing={8} p={8} width="70%" align="center">
                <VStack width={{ base: "100%", md: "30%" }} alignItems="flex-start">
                    <Heading color='yellow.300' fontWeight="bold" letterSpacing="wide">
                        Little Lemon
                    </Heading>
                    <Text color="whiteAlpha.900" fontSize="xl" fontWeight="medium">
                        Chicago
                    </Text>
                    <Text color="whiteAlpha.900" fontSize="lg" mb={4}>
                        Precision meets passion in our kitchen. We craft each dish with care, using local ingredients and time-honored techniques for flavors that delight.
                    </Text>
                </VStack>
                <Box position="relative" h="400px" width="70%" overflow="hidden">
                    <Image
                        src={about2}
                        alt="Imagen 1"
                        objectFit="cover"
                        w="60%"
                        h="70%"
                        position="absolute"
                        zIndex={1}
                        left="0"
                        bottom="0"
                        rounded="md"
                    />
                    <Image
                        src={about1}
                        alt="Imagen 2"
                        objectFit="cover"
                        w="60%"
                        h="70%"
                        position="absolute"
                        zIndex={2}
                        right="0"
                        top="0"
                        rounded="md"
                    />
                </Box>
            </Stack>
        </Stack>
    )
};

export default AboutSection;