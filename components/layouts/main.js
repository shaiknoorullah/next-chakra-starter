import { Box, Container } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'

import SEO from '../../next-seo.config'
import Navbar from '../navbar'
import Footer from '../footer'

const Layout = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <DefaultSeo {...SEO} />
      <Navbar path={router.asPath} />
      <Container maxW="1200px" pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Layout
