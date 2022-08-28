import React from 'react'
import { Button } from '@chakra-ui/react'

export const SignupButton = () => {
  return (
    <Button
      h={'46px'}
      bgColor={'primary'}
      w={'160px'}
      borderRadius={'80px'}
      px={3}
      py={6}
      fontsize={'16px'}
      color={'white'}
      lineHeight={'18.83px'}
    >
      Signup for Free
    </Button>
  )
}
