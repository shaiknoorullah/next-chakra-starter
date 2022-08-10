/** @format */

import {
  Text,
  Box,
  useColorModeValue,
  LinkOverlay,
  LinkBox
} from '@chakra-ui/react'

const Logo = () => (
  <LinkBox>
    <Box
      fontWeight="bold"
      fontSize="1.2rem"
      display="inline-flex"
      alignItems="center"
      height="30px"
      lineHeight="20px"
    >
      <LinkOverlay href="/documentation">
        <Text
          color={useColorModeValue('red.300', 'teal.200')}
          fontFamily="Poppins"
          fontWeight="bold"
        >
          Next_Chakra_Starter
        </Text>
      </LinkOverlay>
    </Box>
  </LinkBox>
)

export default Logo
