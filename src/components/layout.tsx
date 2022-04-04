import Navbar from './navbar'
import Footer from './footer'
import { chakra, Container, Flex } from '@chakra-ui/react'


const Layout: React.FC = ({ children }) => {
    return (
        <Flex direction='column' minHeight='100vh'>
            <Navbar />
            <chakra.main display="flex" flexGrow={1}>{children}</chakra.main>
            <Footer />
        </Flex >
    )
}

export default Layout