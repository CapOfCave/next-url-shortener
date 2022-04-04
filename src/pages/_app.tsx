import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import '../../styles/globals.css'
import theme from '../../theme'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
