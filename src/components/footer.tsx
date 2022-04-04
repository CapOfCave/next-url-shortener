import { Flex, Link, Text } from "@chakra-ui/react";

const Footer: React.FC = () => {

    return (
        <Flex as="footer" justify="center" align="center" height="8rem">
            <Text align="center" fontSize="lg">
                Made with ♥️ by{" "}
                <Link color='teal.500' href='https://github.com/CapOfCave' target="_blank" rel="noreferrer noopener">
                    Lars Kecker
                </Link>
            </Text>
        </Flex>

    )
}

export default Footer;