import { CheckIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Link, useClipboard } from "@chakra-ui/react";
import { NextPage } from "next";
import NextLink from "next/link";

const UrlCreatedPage: NextPage = () => {

    const slug = "8jTtasuBSn";
    const targetUrl = `localhost:3000/to/${slug}`
    const { hasCopied, onCopy } = useClipboard(targetUrl)

    return (
        <Flex direction="column" align="center">
            <Box backgroundColor="green.300" rounded="50%" width="6rem" height="6rem" display="flex" mb="1.5rem">
                <CheckIcon w={10} h={10} margin="auto" color="white" />
            </Box>
            <Heading>
                Link successfully created.
            </Heading>
            <Flex align="center" mt={3}>
                <NextLink href={`/to/${slug}`}>
                    <Link fontSize="lg">{targetUrl}</Link>
                </NextLink>
                <Button onClick={onCopy} ml={2}>
                    {hasCopied ? 'Copied' : 'Copy'}
                </Button>
            </Flex>
        </Flex>
    )
}

export default UrlCreatedPage;