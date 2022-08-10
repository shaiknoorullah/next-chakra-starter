import { useState } from 'react'
import {
  Box,
  Heading,
  Text,
  LinkBox,
  LinkOverlay,
  useColorModeValue
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

function Card({ props }) {
  const [hover, setHover] = useState(false)

  const handleHover = e => {
    e.preventDefault()
    setHover(!hover)
  }

  const Colors = {
    hover: useColorModeValue('purple.500', 'telegram.400'),
    notHover: useColorModeValue('blackAlpha.900', 'whiteAlpha.900')
  }

  return (
    <LinkBox>
      <LinkOverlay
        href={props.href}
        target="_blank"
        onPointerEnter={e => {
          handleHover(e)
        }}
        onPointerLeave={e => {
          handleHover(e)
        }}
      >
        <Box
          borderColor={hover ? Colors.hover : Colors.notHover}
          color={hover ? Colors.hover : Colors.notHover}
          maxW="xs"
          px="1.5rem"
          py="1.8rem"
          m="1.5rem"
          borderRadius="lg"
          border="sm"
          borderWidth="1px"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignContent="flex-start"
        >
          <Heading
            as="h2"
            mb="1rem"
            fontFamily="gilroy"
            fontWeight="normal"
            fontSize="2xl"
          >
            {props.title} <ArrowForwardIcon w="3rem" h="1.3rem" />
          </Heading>
          <Text fontSize="1.3rem" lineHeight="1.8rem">
            {props.desc}
          </Text>
        </Box>
      </LinkOverlay>
    </LinkBox>
  )
}

export default Card
