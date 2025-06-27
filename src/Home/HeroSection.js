import { Container, HStack, VStack, Image, Button, Text, Heading } from '@chakra-ui/react';
import image from '../images/home_hero.jpg'

const HeroSection = () => {
    return (
        <Container width='80%'>
            <HStack p={8} >
                <VStack>
                    <Heading color='yellow.300' fontWeight="bold" letterSpacing="wide">
                        Little Lemon
                    </Heading>
                    <Text fontSize="xl" fontWeight="medium">
                        Chicago
                    </Text>
                    <Text fontSize="lg" mb={4}>
                        We blend Mediterranean tradition with modern flair. Each dish is a work of art, crafted with locally sourced ingredients and a passion for gastronomy. Enjoy an unforgettable culinary experience in a warm and inviting atmosphere.
                    </Text>
                    <Button>Reserve a table</Button>
                </VStack>
                <Image
                    src={image}
                    alt='photo'
                    height={400}
                    borderRadius="2xl"
                />
            </HStack>
        </Container>
    )
};

export default HeroSection;