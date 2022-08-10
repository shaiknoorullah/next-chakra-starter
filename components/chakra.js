import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
  CSSReset
} from '@chakra-ui/react'
import theme from '../lib/theme'

export default function Chakra({ cookies, children }) {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManager(cookies)
      : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      <CSSReset />
      {children}
    </ChakraProvider>
  )
}

export async function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
}
