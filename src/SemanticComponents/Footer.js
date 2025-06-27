import React from 'react';
import Nav from './Nav';
import { Container, Stack, Text, Image, Heading } from '@chakra-ui/react';

const Footer = () => {
    return (
        <footer>
            <Container
                maxW='100%' 
                backgroundColor='#18181b'
                centerContent
                p={4}
            >
                <Stack 
                    direction={{base:'column', md:'row'}}
                    spacing={{ base: 8, md: 20 }}
                >
                    <Image src='../images/photo3.jpg' alt='photo' />
                    <Stack direction='column'>
                        <Heading color='yellow.300' fontSize="xl" fontWeight="medium">DoorMat Navigation</Heading>
                        <Nav direction='column'/>
                    </Stack>
                    <Stack direction='column'>
                        <Heading color='yellow.300' fontSize="xl" fontWeight="medium">Contact</Heading>
                        <Text color='whiteAlpha.900'>Address</Text>
                        <Text color='whiteAlpha.900'>Phone Number</Text>
                        <Text color='whiteAlpha.900'>Email</Text>
                    </Stack>
                    <Stack direction='column'>
                        <Heading color='yellow.300' fontSize="xl" fontWeight="medium">Social Media Links</Heading>
                        <Text color='whiteAlpha.900'>Instagram</Text>
                        <Text color='whiteAlpha.900'>Tik Tok</Text>
                        <Text color='whiteAlpha.900'>Youtube</Text>
                    </Stack>
                </Stack>
            </Container>
        </footer>
    )
};

export default Footer;