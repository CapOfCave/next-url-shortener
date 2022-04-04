import { CheckIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Link, useClipboard } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import NextLink from "next/link";

interface UrlCreatedPageProps {
    slug: string;
}

const UrlCreatedPage: NextPage<UrlCreatedPageProps> = ({ slug }) => {

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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { slug } = query

    // the user is messing with us; redirect them to the home page
    if (!slug || Array.isArray(slug)) {
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
    }

    return {
        props: {
            slug
        }
    }
}

export default UrlCreatedPage;