import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Grid from '../components/grid'
import {
  Text,
  Box,
  Button,
  Badge,
  Tooltip,
  Heading,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  HStack,
  Avatar,
  Link as ChakraLink,
} from '@chakra-ui/react'
import { QuestionIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Highlights from '../components/Highlights'
import Titles from '../components/ui/Titles'
import CardImg from '../components/CardImg'
import VirtualExperiencePrograms from '../components/VirtualExperiencePrograms'
import AboutMe from '../components/AboutMe'
import Mobile from '../components/Mobile'

// Create React componenet

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(
        sort: { order: DESC, fields: createdAt }
        filter: { tags: { eq: "selected" } }
      ) {
        edges {
          node {
            id
            slug
            title
            description
            technologiesUsed
            linkDemo
          }
        }
      }
    }
  `)
  const {
    allContentfulProject: { edges: projects },
  } = data

  const bgBadge = useColorModeValue('black', 'white')

  return (
    <Layout>
      {/*START CONTENT*/}
      <SEO title="Home" description="@renzo4web Froentend Developer" />
      <Box as="section" mt="2em" textAlign="left">
        <Text
          as="h1"
          bgGradient="linear(to-r, teal.500,green.500)"
          bgClip="text"
          fontSize="4xl"
          fontWeight="extrabold"
        >
          Hi, I'm Renzo
        </Text>{' '}
        <marquee>
          <Text mt="1em" fontWeight="bold" fontStyle="italic">
            <Tooltip label="At the moment junior 👶">
              <Text as="span" className="flash">
                Fullstack Developer
              </Text>
            </Tooltip>{' '}
            powered by coffee ☕ living in{' '}
            <Tooltip label="Mendoza">Argentina🌎.</Tooltip>
          </Text>
        </marquee>
        <Text
          fontSize={['xl', '2xl']}
          mt={2}
          fontWeight="regular"
          lineHeight="1.5"
        >
          Passionate about all the technologies that are part of the web, and
          how with the help of these we can create applications that have a
          social impact and help people. Currently looking for an opportunity to
          break into the industry and show what I am capable of.
        </Text>
        <Text
          fontSize={['xl', '2xl']}
          mt={2}
          fontWeight="regular"
          lineHeight="1.5"
        >
          Right now I'm focusing on learning more about{' '}
          <Badge p={1} color="white" fontSize="0.8em" bg={'#2F74C0'}>
            Typescript
          </Badge>
          {', '}
          <Badge bg={bgBadge} p={1} fontSize="0.8em" color="cyan.400">
            React
          </Badge>
          . Hoping one day evolve into the mythical
          <span data-wenk="if there is such a thing">
            ✨full-stack developer✨.
          </span>
        </Text>
      </Box>
      <Highlights />

      <Box as="section">
        <Titles>Projects</Titles>
        <Grid list={projects} />
      </Box>

      <Box as="section">
        <Mobile />
      </Box>

      <VirtualExperiencePrograms />

      <Box
        textAlign="left"
        bg={() => useColorModeValue('gray.100', '#1e2533')}
        p={3}
        borderRadius={10}
        mx={[0, 0, 10]}
        my={'3em'}
      >
        <Heading fontSize="xl" color="teal">
          FrontendMentor
        </Heading>
        <Text fontSize="md" my={2}>
          What is FrontendMentor? It is a website where you are given a web
          design and you have to implement and deploy it creating a fully
          functional site.
        </Text>
        <Text fontSize="md" my={2}>
          Take a look at my{' '}
          <ChakraLink
            href="https://www.frontendmentor.io/profile/w3renzo"
            isExternal
            color="teal"
            textAlign={'center'}
          >
            Frontend Mentor
          </ChakraLink>{' '}
          profile to see the projects I've done.
        </Text>
      </Box>
    </Layout>
  )
}

export default HomePage
