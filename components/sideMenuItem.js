import { Box, Container, Text } from '@chakra-ui/react'

const SideMenuItem = ({ children, clicked, content, onClick }) => {
  return (
    <Container
      m="0"
      p="0.8rem"
      display="flex"
      flexDir="row"
      justifyContent="left"
      alignItems="center"
      onClick={onClick}
      cursor="pointer"
      _hover={{
        background: 'teal.200',
        bgGradient: 'radial(teal.100, teal.200)',
        color: 'blackAlpha.900'
      }}
      borderRadius="lg"
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        {children}
        <Text
          pl="2rem"
          fontFamily="poppins"
          fontWeight="normal"
          fontSize="1rem"
          display={clicked ? 'flex' : 'none'}
        >
          {content}
        </Text>
      </Box>
    </Container>
  )
}

export default SideMenuItem
