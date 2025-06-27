import { HStack, VStack, Image, Text, Icon, Heading } from "@chakra-ui/react";
import Rating from "react-rating";
import { FaStar, FaStarHalfAlt, FaRegStar} from "react-icons/fa";

const TestimonialCard = ({rating, photoSrc, name, review}) => {
    return (
        <VStack bgColor='whiteAlpha.900' p={10} minWidth={250} maxWidth={250} rounded="md" alignItems="flex-start">
            <Rating
                readonly
                initialRating={rating}
                emptySymbol={<Icon as={FaRegStar} color="gray.300" boxSize={6} />}
                fullSymbol={<Icon as={FaStar} color="yellow.400" boxSize={6} />}
                fractions={2} // Permite medias estrellas (1.5, 2.5, etc.)
            />
            <HStack>
                <Image src={photoSrc} alt="photo" width={50} height={50} rounded="md"/>
                <Heading size="sm">{name}</Heading>
            </HStack>
            <Text color="gray.600">{review}</Text>
        </VStack>
    )
};

export default TestimonialCard;