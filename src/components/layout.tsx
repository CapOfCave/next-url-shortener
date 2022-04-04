import Navbar from './navbar'
import Footer from './footer'
import { chakra, Container, Flex } from '@chakra-ui/react'


const Layout: React.FC = ({ children }) => {
    return (
        <Flex direction='column' minHeight='100vh'>
            <Navbar />
            <Container as="main" display='flex' flexDir='column' justifyContent='center' flexGrow={1}>
                {children}
            </Container>
            <Footer />
        </Flex >
    )
}

export default Layout