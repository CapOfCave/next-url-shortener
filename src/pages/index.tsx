import { Box, Button, ComponentWithAs, Container, Flex, Heading, Input, Stack, StackProps, useColorMode } from '@chakra-ui/react'
import axios from 'axios'
import { Field, Formik, FormikHelpers } from 'formik'
import type { NextPage } from 'next'
import { ChangeEvent, FormEvent, useState } from 'react'
import { TextFormField } from '../components/form-fields/TextFormField'
import { CreateShortUrlRequest } from '../types/rest'

interface CreateShortUrlFormValues {
  targetUrl: string;
}

const initialValues: CreateShortUrlFormValues = { targetUrl: "" }

const Home: NextPage = () => {

  const { colorMode, toggleColorMode } = useColorMode()

  const handleSubmit = async ({ targetUrl }: CreateShortUrlFormValues, { setSubmitting }: FormikHelpers<CreateShortUrlFormValues>) => {
    const body: CreateShortUrlRequest = {
      targetUrl
    }
    const response = await axios.post("/api/short-urls", body)
    console.log(response.data)
    setSubmitting(false);
  }

  return (
    <Flex direction='column' height='100vh'>
      <Flex justify='flex-end' padding='2'>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </Flex>
      <Container display='flex' flexDir='column' justifyContent='center' flexGrow={1}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => { handleSubmit(values, actions) }}>
          {formik => (
            <Stack as="form" spacing={4} onSubmit={e => formik.handleSubmit(e as any as FormEvent<HTMLFormElement>)}>
              <Heading>Create Short URL</Heading>
              <Field placeholder="Target URL" name="targetUrl" component={TextFormField} />
              <Button type="submit">Create</Button>
            </Stack>
          )}
        </Formik>
      </Container>
    </Flex >
  )
}

export default Home
