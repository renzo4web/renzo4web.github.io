import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'

import { Link as gatsbyLink, graphql, useStaticQuery } from 'gatsby'
import { Box, Button, Grid, Link, Heading, Text, Flex, useColorModeValue } from '@chakra-ui/react'
import { LinkIcon } from '@chakra-ui/icons'
import { MotionBox } from '../components/ui/motion'
import BadgeGroup from '../components/BadgeGroup'
import Titles from '../components/ui/Titles'

// Create React componenet
// A valid React componenet must return a ONLY React element
const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject {
        edges {
          node {
            id
            slug
            heroImg {
              fluid(maxWidth: 300, quality: 80) {
                ...GatsbyContentfulFluid
              }
              description
            }
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
  return (
    <Layout>
      {/*START CONTENT*/}
      <SEO title="Projects" description="My Projects" />
      <Box my="2em">
        <Titles>Selected Projects</Titles>
      </Box>
      <Grid
        justifyContent="center"
        mb="2em"
        templateColumns={['repeat(auto-fit,minmax(250px,1fr))', '1fr 1fr']}
        gap={6}
        role="grid"
      >
        {projects.map(({ node: project }) => {
          return (
            <MotionBox role="gridcell" m={0} w="100%" whileHover={{ y: -5 }} key={project.id}>
              <Box
                key={project.id}
                overflow="hidden"
                boxShadow="md"
                borderRadius={8}
                height="100%"
                borderColor={useColorModeValue('gray.50', 'gray.800')}
                bg={() => useColorModeValue('gray.100', '#1e2533')}
                shadow="md"
              >
                <Flex
                  height="100%"
                  w="100%"
                  py={0}
                  direction={['column', 'row']}
                  alignItems={['flex-start', 'center']}
                >
                  {project.heroImg && (
                    <Box w="100%" maxW={['100%', '150px']} height="100%">
                      <Img
                        style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                        fluid={project.heroImg.fluid}
                      />
                    </Box>
                  )}
                  <Box h="100%" py={2} ml={3} my={2} textAlign="left" mb="auto">
                    <BadgeGroup arr={project.technologiesUsed.split(',')} />
                    <Text
                      aria-aria-labelledby={project.title}
                      title={project.title}
                      fontWeight="extrabold"
                      lineHeight={1.2}
                      color="green.400"
                      as="h4"
                    >
                      {project.title}
                    </Text>
                    <Text fontSize="sm" as="p" my={2}>
                      {project.description}
                    </Text>
                    <Button
                      aria-label={`More info about ${project.title}`}
                      variant="link"
                      as="span"
                      role="link"
                      rightIcon={<LinkIcon />}
                    >
                      <Link
                        aria-label={`More info about ${project.title}`}
                        mt={'auto'}
                        as={gatsbyLink}
                        to={`/project/${project.slug}`}
                      >
                        More Info
                      </Link>
                    </Button>
                  </Box>
                </Flex>
              </Box>
            </MotionBox>
          )
        })}
      </Grid>

      {/*END CONTENT*/}
    </Layout>
  )
}

export default ProjectsPage
