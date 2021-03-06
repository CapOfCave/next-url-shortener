import { AddIcon, CheckIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Flex, Heading, Link, useClipboard } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import NextLink from "next/link";
import { useRouter } from "next/router";

interface UrlCreatedPageProps {
    slug: string;
}

const UrlCreatedPage: NextPage<UrlCreatedPageProps> = ({ slug }) => {

    const targetUrl = `localhost:3000/to/${slug}`
    const { hasCopied, onCopy } = useClipboard(targetUrl)

    const router = useRouter();

    const navigateBack = () => {
        router.push("/")
    }

    return (
        <Container my="auto" display='flex' flexDir='column' justifyContent='center' flexGrow={1}>
            <Flex direction="column" align="center">
                <Box backgroundColor="teal.500" rounded="50%" width="6rem" height="6rem" display="flex" mb="6">
                    <CheckIcon w={10} h={10} margin="auto" color="white" />
                </Box>
                <Heading>
                    Link successfully created.
                </Heading>
                <Flex align="center" mt={4}>
                    <Link href={`/to/${slug}`} target="_blank" rel="noreferrer noopener" fontSize="xl" color='teal.500'>{targetUrl}</Link>
                    <Button onClick={onCopy} ml={3}>
                        {hasCopied ? 'Copied' : 'Copy'}
                    </Button>
                </Flex>

                <Button onClick={navigateBack} leftIcon={<AddIcon />} mt={10} size="md" variant='ghost'>
                    Create another Short URL
                </Button>
            </Flex>
        </Container>
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