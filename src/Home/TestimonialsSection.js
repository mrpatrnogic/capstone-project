import { Heading, VStack, Stack } from "@chakra-ui/react";
import TestimonialCard from "./TestimonialCard";
import face1 from "../images/face1.png"
import face2 from "../images/face2.png"
import face3 from "../images/face3.png"
import face4 from "../images/face4.png"

const TestimonialsSection = () => {
    const testimonials = [
    {
        rating: "5",
        photoSrc: face1,
        name: "Mario Cook",
        review: "Amazing experience! Out of this world",
    },
    {
        rating: "4.5",
        photoSrc: face2,
        name: "Adrian Cook",
        review: "Best food I've tasted in a while.",
    },{
        rating: "5",
        photoSrc: face3,
        name: "Tim Cook",
        review: "Delightul from start to finish.",
    },{
        rating: "4",
        photoSrc: face4,
        name: "Bill Gates",
        review: "Almost as good as mine.",
    },
    ];

    return (
        <VStack bgColor='#18181b' px={100} py={10} spacing={10}>
            <Heading color="whiteAlpha.900">Testimonials</Heading>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </Stack>
        </VStack>
    )
};

export default TestimonialsSection;