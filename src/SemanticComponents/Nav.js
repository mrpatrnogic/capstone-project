import { Link as ChakraLink, Stack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
const Nav = (props) => {
    return (
        <nav>
            <Stack direction={{base:'column', md: props.direction}}>
                {props.children}
                <ChakraLink as={RouterLink} to="/" p={2}>Home</ChakraLink>
                <ChakraLink as={RouterLink} to="/about" p={2}>About</ChakraLink>
                <ChakraLink as={RouterLink} to="/menu" p={2}>Menu</ChakraLink>
                <ChakraLink as={RouterLink} to="/reservations" p={2}>Reservations</ChakraLink>
                <ChakraLink as={RouterLink} to="/order" p={2}>Order Online</ChakraLink>
                <ChakraLink as={RouterLink} to="/login" p={2}>Login</ChakraLink>
            </Stack>
        </nav>
    )
};

export default Nav;