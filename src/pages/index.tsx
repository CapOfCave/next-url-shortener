import { Box, Button, Container, Flex, Heading, Input, Stack, useColorMode } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex direction='column' height='100vh'>
      <Flex justify='flex-end' padding='2'>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </Flex>
      <Container display='flex' flexDir='column' justifyContent='center' flexGrow={1}>
        <Stack spacing={4}>
          <Heading>Create Short URL</Heading>
          <Input placeholder='Target URL' />
          <Button>Create</Button>
        </Stack>
      </Container>
    </Flex>
  )
}

export default Home
