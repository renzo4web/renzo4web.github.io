import { Heading } from '@chakra-ui/react'
import React from 'react'
import UnderlinedText from './UnderlineText'

const Titles = ({ children }) => {
  return (
    <UnderlinedText h={1}>
      <Heading
        role="banner"
        bgGradient="linear(to-r, teal.500,green.500)"
        bgClip="text"
        fontSize="4xl"
        fontWeight="bold"
        as="h2"
        textAlign="left"
      >
        {children}
      </Heading>
    </UnderlinedText>
  )
}

export default Titles
