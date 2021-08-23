import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import ThemeToggle from './toggle-theme'
import {
  Box,
  Link as LinkChakra,
  Flex,
  useColorModeValue,
  Text,
  Avatar,
  Button,
} from '@chakra-ui/react'

const Header = ({ activePage }) => {
  const {
    site: {
      siteMetadata: { title },
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
      borderBottomLeftRadius="2em"
      borderBottomRightRadius="2em"
      as="header"
      px={4}
      boxShadow={'lg'}
      width="100%"
    >
      <Flex
        as="nav"
        direction={['column', 'row']}
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        w={['90%', '85%', '80%']}
        maxW={800}
        mx="auto"
      >
        <Flex role="navigation">{createLinksPages(activePage)}</Flex>
        <ThemeToggle />
      </Flex>
    </Box>
  )
}

const createLinksPages = activePage => {
  const currentPages = ['home', 'projects', 'about']

  console.log(activePage)
  return currentPages.map(titlePage => {
    const title = `${titlePage.charAt(0).toUpperCase()}${titlePage.slice(1)}`
    return (
      <Link key={titlePage} to={`/${titlePage === 'home' ? '' : titlePage}`}>
        <Button as="span" variant="ghost">
          <Text fontWeight="bold" fontSize="lg">
            {title}
          </Text>
        </Button>
      </Link>
    )
  })
}

export default Header
