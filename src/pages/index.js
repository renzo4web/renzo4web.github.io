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
} from '@chakra-ui/react'
import { QuestionIcon } from '@chakra-ui/icons'
import Highlights from '../components/Highlights'
import Titles from '../components/ui/Titles'
import CardImg from '../components/CardImg'
import VirtualExperiencePrograms from '../components/VirtualExperiencePrograms'
import AboutMe from '../components/AboutMe'

// Create React componenet

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(filter: { tags: { eq: "selected" } }) {
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
                Frontend Developer
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
          <Badge p={1} color="yellow.500" fontSize="0.8em" bg={bgBadge}>
            Javascript
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

      <VirtualExperiencePrograms />

      <Box as="section">
        <Titles>Projects</Titles>
        <Grid list={projects} />
        <Button mt={2} as="p" variant="outline">
          <Link to="/projects">More Projects take a look </Link>
        </Button>
      </Box>

      {/*END CONTENT*/}
    </Layout>
  )
}

export default HomePage
