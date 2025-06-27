import { Heading, Box } from '@chakra-ui/react';

import Header from '../SemanticComponents/Header';
import Footer from '../SemanticComponents/Footer';
import BookingForm from '../Reservations/BookingForm';

const ReservationPage = () => {
    return (
        <Box>
            <Header />
            <Box p={8}>
                <Heading textAlign="center">Reservations</Heading>
                <BookingForm />
            </Box>
            <Footer />
        </Box>
    )
}

export default ReservationPage;