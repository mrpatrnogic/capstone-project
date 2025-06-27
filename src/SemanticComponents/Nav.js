import { Stack, Link } from '@chakra-ui/react';
import React from 'react';

const Nav = (props) => {
    return (
        <nav>
            <Stack direction={{base:'column', md: props.direction}}>
                {props.children}
                <Link href="#home" p={2}>Home</Link>
                <Link href="#about" p={2}>About</Link>
                <Link href="#menu" p={2}>Menu</Link>
                <Link href="#reservations" p={2}>Reservations</Link>
                <Link href="#order" p={2}>Order Online</Link>
                <Link href="#login" p={2}>Login</Link>
            </Stack>
        </nav>
    )
};

export default Nav;