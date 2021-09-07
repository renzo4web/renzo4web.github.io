import { ArrowRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Heading,
  HStack,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  Flex,
  Button,
  Image,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import CardImg from './CardImg'

const Mobile = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(
        sort: { order: DESC, fields: createdAt }
        filter: { tags: { eq: "mobile" } }
      ) {
        edges {
          node {
            id
            slug
            title
            description
            heroImg {
              fluid(maxWidth: 200) {
                ...GatsbyContentfulFluid
              }
            }
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

  console.log(data)

  return (
    <Box
      as={'section'}
      borderBottom="4px solid"
      borderColor={'#53c8c4'}
      px={4}
      mx={[0, 0, 10]}
      my={'3em'}
    >
      <HStack spacing={5}>
        <Heading color={'green.500'} fontSize={'lg'} textAlign={'left'}>
          React Native
        </Heading>
      </HStack>

      {projects.map(({ node: project }) => (
        <Flex
          key={project.id}
          my={'1em'}
          w={'100%'}
          shadow={'md'}
          direction={['column', 'row']}
          p={'1em'}
          borderRadius={10}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
          bg={useColorModeValue('gray.100', '#1e2533')}
        >
          <Img
            style={{
              height: '100%',
              width: '100%',
              maxWidth: '50px',
              objectFit: 'cover',
              boxShadow: '2px 8px 15px -8px rgba(0,0,0,0.41)',
              borderRadius: '5px',
            }}
            fluid={project.heroImg.fluid}
          />
          <Box ml={['0', '1rem']} mr={'auto'} justifySelf={'flex-start'}>
            <VStack align={'start'}>
              <Heading
                textAlign={'left'}
                mt={['10px', '0']}
                fontWeight={'bold'}
                fontSize={'md'}
              >
                {project.title}
              </Heading>
              <Heading textAlign={'left'} mt={['10px', '0']} fontSize={'sm'}>
                {project.description}
              </Heading>
            </VStack>
          </Box>
          <Link to={`project/${project.slug}`}>
            <ArrowRightIcon w={3} h={3} />
          </Link>
        </Flex>
      ))}
    </Box>
  )
}

export default Mobile
