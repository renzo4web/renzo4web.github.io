import React from 'react'

import { Box } from '@chakra-ui/react'

const UnderlinedText = ({ children, ...props }) => (
  <Box as="span" display="inline-block" position="relative">
    {children}
    <Box
      as="span"
      display="block"
      position="absolute"
      bg={'gray.200'}
      bgGradient="linear(to-r, teal.500,green.500)"
      w={'100%'}
      h={props.h || '1px'}
      bottom={-2}
      {...props}
    />
  </Box>
)

export default UnderlinedText
