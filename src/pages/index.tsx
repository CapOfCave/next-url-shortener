import { Box, Button, Container, Flex, Heading, Input, Stack, useColorMode } from '@chakra-ui/react'
import axios from 'axios'
import type { NextPage } from 'next'
import { ChangeEvent, FormEvent, useState } from 'react'
import { CreateShortUrlRequest } from '../types/rest'

const Home: NextPage = () => {

  const { colorMode, toggleColorMode } = useColorMode()

  const [targetUrl, setTargetUrl] = useState('')

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!targetUrl) return; // TODO feedback

    const body: CreateShortUrlRequest = {
      targetUrl: targetUrl
    }
    const response = await axios.post("/api/short-urls", body)
    console.log(response);
  }

  const handleTargetUrlChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setTargetUrl(event.target.value);
  }

  return (
    <Flex direction='column' height='100vh'>
      <Flex justify='flex-end' padding='2'>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </Flex>
      <Container display='flex' flexDir='column' justifyContent='center' flexGrow={1}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <Heading>Create Short URL</Heading>
            <Input placeholder='Target URL' value={targetUrl} onChange={handleTargetUrlChanged} />
            <Button type="submit">Create</Button>
          </Stack>
        </form>
      </Container>
    </Flex>
  )
}

export default Home
