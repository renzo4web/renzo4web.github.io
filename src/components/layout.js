import React from 'react'

import Footer from './footer'
import Header from './header'
import '../styles/index.scss'
import { Box, ChakraProvider, Flex, useColorModeValue } from '@chakra-ui/react'
import theme from './ui/theme'

import { animationChange } from './layout.module.scss'

const Layout = ({ pageTitle, children }) => {
  return (
    <ChakraProvider h="100%" theme={theme} resetCSS>
      <Box
        h="100%"
        bgImage={'url(../images/wave.svg)'}
        bgGradient={() =>
          useColorModeValue(
            'linear-gradient(315deg, #E0EAFC 0%, #CFDEF3 74%)',
            'linear(to-b, #141E30 0%, #243B55 74%)'
          )
        }
      >
        <Flex
          as="div"
          direction="column"
          textAlign="center"
          fontSize="xl"
          w={['90%', '85%', '80%']}
          maxW={850}
          mx="auto"
          h="100%"
        >
          <link
            rel="stylesheet"
            href="https://unpkg.com/wenk/dist/wenk.css"
          ></link>
          <Header activePage={pageTitle} />
          <Box
            h="100%"
            className={animationChange}
            flexGrow="2"
            mt="auto"
            as="main"
          >
            {children}
          </Box>
          <Footer />
        </Flex>
      </Box>
    </ChakraProvider>
  )
}

export default Layout
