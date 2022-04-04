import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Flex, Tooltip, useColorMode } from "@chakra-ui/react";

const Navbar: React.FC = () => {

    const { colorMode, toggleColorMode } = useColorMode()

    const tooltip = colorMode === 'light' ? "Switch to Dark Design" : "Switch to Light Design";
    return (
        <Flex justify='flex-end' padding='2'>
            <Tooltip label={tooltip}>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
            </Tooltip>
        </Flex>
    )
}

export default Navbar;