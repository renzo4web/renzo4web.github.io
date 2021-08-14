import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import { Box, Flex, Text } from '@chakra-ui/react'
import Contact from './contact'

const Footer = ({ children }) => {
  const {
    site: {
      siteMetadata: { author },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <Box
      borderTopLeftRadius="2em"
      borderTopRightRadius="2em"
      as="footer"
      py="1em"
      mt="auto"
      boxShadow={'xl'}
      width="100%"
      zIndex="55"
    >
      <Contact />
      <Flex direction={['column', 'row']} w="100%" alignItems="center" justifyContent="center">
        {children}
        <Text mr={['0', '20px']}>Crafted By {author} © 2021</Text>
        <Text mr={['0', '20px']}>That's it. Seeya later friend ¯\_(ツ)_/¯</Text>
        <Link to="/thanks">Thanks!!!</Link>
      </Flex>
    </Box>
  )
}

export default Footer
