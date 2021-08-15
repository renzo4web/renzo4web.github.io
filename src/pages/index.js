import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Grid from '../components/grid'
import { Text, Box, Button, Badge, Tooltip, useColorModeValue } from '@chakra-ui/react'
import Highlights from '../components/Highlights'
import Titles from '../components/ui/Titles'

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
            powered by coffee ☕ living in <Tooltip label="Mendoza">Argentina🌎.</Tooltip>
          </Text>
        </marquee>
        <Text fontSize={['2xl', '3xl']} mt={2} fontWeight="regular" lineHeight="1.4">
          With a background in product design, in other words I went to art college but ended up as
          a programmer. Currently exploring new opportunities and side projects.
        </Text>
        <Text fontSize={['2xl', '3xl']} mt={2} fontWeight="regular" lineHeight="1.4">
          Right now I'm focusing on learning more about{' '}
          <Badge p={1} color="yellow.500" fontSize="0.8em" bg={bgBadge}>
            Javascript
          </Badge>
          {', '}
          <Badge bg={bgBadge} p={1} fontSize="0.8em" color="cyan.400">
            React
          </Badge>
          . Hoping one day evolve into the mythical
          <span data-wenk="if there is such a thing">✨full-stack developer✨.</span>
        </Text>
      </Box>
      <Highlights />

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
