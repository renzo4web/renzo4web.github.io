import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Box, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import ButtonBack from '../components/ButtonBack'

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      description
      body {
        raw
        references {
          description
          fluid(maxWidth: 400, quality: 80) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const Project = ({ data }) => {
  const {
    contentfulProject: { title, description, body },
  } = data

  let imgs = []
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => (
        <Text as="strong" fontWeight="bold" my={2}>
          {text}
        </Text>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Text as="p" fontSize="md" my={4}>
          {children}
        </Text>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <Text as="h1" textAlign="center" my="2em" fontWeight="extrabold" color="teal.500">
          {children}
        </Text>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Text as="h2" textAlign="center" my="2em" fontWeight="extrabold" color="teal.500">
          {children}
        </Text>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <Text as="h3" textAlign="left" my="1em" fontWeight="extrabold" color="teal.500">
          {children}
        </Text>
      ),
      [BLOCKS.UL_LIST]: (node, children) => <UnorderedList>{children}</UnorderedList>,
      [BLOCKS.LIST_ITEM]: (node, children) => <ListItem>{children}</ListItem>,

      'embedded-asset-block': () => {
        if (imgs.length > 0) return
        imgs = body.references.map(ref => {
          if (imgs.includes(ref)) return
          const url = ref.fluid
          const alt = ref.description
          return (
            <Img
              style={{
                maxWidth: '450px',
                width: '100%',
                margin: '2em auto',
                height: '100%',
                borderRadius: '25px',
              }}
              loading="eager"
              fluid={url}
              alt={alt}
              key={alt.src}
            />
          )
        })
        return imgs
      },
    },
  }

  return (
    <Layout pageTitle={title}>
      <SEO title={title} description={description} />
      <Box mt="auto" textAlign="left">
        {documentToReactComponents(JSON.parse(body.raw), options)}
      </Box>
      <ButtonBack />
    </Layout>
  )
}

export default Project
