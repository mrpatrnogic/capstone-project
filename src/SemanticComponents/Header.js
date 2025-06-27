import React from 'react';
import logo from '.././Logo.svg';
import Nav from './Nav';
import { Container, Stack } from '@chakra-ui/react';

const Header = () => {
    return (
        <header>
            <Container 
                maxW='100%' 
                backgroundColor='#18181b'
                centerContent
                p={4}
            >
                <Nav direction='row'>
                    <img src={logo} alt="logo"></img>
                </Nav>
            </Container>
        </header>
    )
};

export default Header;