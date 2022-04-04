import { Button, Flex, useColorMode } from "@chakra-ui/react";

const Navbar: React.FC = () => {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex justify='flex-end' padding='2'>
            <Button onClick={toggleColorMode}>
                Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>
        </Flex>
    )
}

export default Navbar;