import { HStack, VStack, Stack, Heading, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import DishCard from './DishCard';
import photo1 from '../Images/photo1.jpg'
import photo2 from '../Images/photo2.svg'
import photo3 from '../Images/photo3.jpg'

const HighlightsSection = (props) => {
    const dishes = [
  {
    title: "Greek salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    imageSrc: photo1,
  },
  {
    title: "Bruchetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    imageSrc: photo2,
  },
  {
    title: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    imageSrc: photo3,
  },
];

    return (
      <Stack width="100%" bgColor="yellow.400" align="center">
        <VStack px={100} py={10} spacing={10} width="70%">
            <HStack justify="space-between" width="100%">
                <Heading fontWeight="bold" letterSpacing="wide">Specials</Heading>
                <Button as={RouterLink} to="/menu">Online Menu</Button>
            </HStack>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                {dishes.map((dish, index) => (
                    <DishCard key={index} {...dish} />
                ))}
            </Stack>
        </VStack>
      </Stack>
    )
};

export default HighlightsSection;