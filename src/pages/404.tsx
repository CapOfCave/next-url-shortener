import { Container, Heading, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Custom404: NextPage = () => {
    return (
        <Container display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Heading fontSize="10rem">404</Heading>
            <Text fontSize="lg" mt={2}>Sorry, this page does not exist.</Text>
        </Container>
    )
}


export default Custom404;