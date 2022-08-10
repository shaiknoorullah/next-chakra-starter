/** @format */

import { Box, Container, Divider, Stack } from '@chakra-ui/react'
import { GitHub, Instagram } from '@mui/icons-material'
import React from 'react'
import Logo from './logoPersonal'
import SocialButton from './socialButtons'

const Footer = () => (
  <Container maxW="1200px" m="0" p="0" position="fixed" bottom="1rem">
    <Box
      // p="1rem"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
    >
      <Stack spacing="1.5rem" alignItems="center">
        <Divider w="600px" />
        <Box display="flex" flexDir="row" alignItems="center">
          <Logo />
          <SocialButton
            Children={<GitHub />}
            href="https://github.com/shaiknoorullah"
          />
          <SocialButton
            Children={<Instagram />}
            href="https://www.instagram.com/shaik.noorullah/"
          />
        </Box>
      </Stack>
    </Box>
  </Container>
)

export default Footer
