import {
  Container,
  Divider,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'

const DocumentationContent = ({ title, subtitle, description, children }) => {
  return (
    <Container
      m="2"
      ml="2rem"
      p="2"
      justifyContent="left"
      alignItems="flex-start"
      display="flex"
      flexDirection="column"
    >
      <Heading as="h2" fontSize="3xl" fontFamily="poppins" fontWeight="bold">
        {title}
      </Heading>
      <Divider
        my="2"
        borderWidth="0.1rem"
        borderRadius="lg"
        bgColor={useColorModeValue('blackAlpha.400', 'whiteAlpha.400')}
        borderColor={useColorModeValue('blackAlpha.400', 'whiteAlpha.400')}
      />
      <Heading as="h3" fontSize="xl" my="2">
        {subtitle}
      </Heading>
      <Text
        as="paragraph"
        fontSize="sm"
        fontFamily="poppins"
        fontWeight="medium"
        color={useColorModeValue('blackAlpha.900', 'whiteAlpha.800')}
      >
        {description}
      </Text>
      {children}
    </Container>
  )
}

export default DocumentationContent
