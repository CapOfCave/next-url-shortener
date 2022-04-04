import { Button, Container, Flex, Heading, Stack, useColorMode } from '@chakra-ui/react'
import axios from 'axios'
import { Field, Formik, FormikHelpers } from 'formik'
import type { NextPage } from 'next'
import { FormEvent } from 'react'
import * as yup from "yup"
import { TextFormField } from '../components/form-fields/TextFormField'
import { CreateShortUrlRequest } from '../types/rest'

interface CreateShortUrlFormValues {
  targetUrl: string;
}

const initialValues: CreateShortUrlFormValues = { targetUrl: "" }

const schema = yup.object({
  targetUrl: yup.string()
    .label("Target URL")
    .required()
    .url(({ label }) => `${label} must be a valid URL. Don't forget to include the protocol (https://)`),
})

const CreateShortUrl: NextPage = () => {

  const handleSubmit = async ({ targetUrl }: CreateShortUrlFormValues, { setSubmitting }: FormikHelpers<CreateShortUrlFormValues>) => {
    const body: CreateShortUrlRequest = {
      targetUrl
    }
    const response = await axios.post("/api/short-urls", body)
    console.log(response.data)
    setSubmitting(false);
  }

  return (
    <Formik
      validationSchema={schema}
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
  )
}

export default CreateShortUrl
