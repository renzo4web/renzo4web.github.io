import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      description
      body {
        raw
        references {
          description
          fluid(maxWidth: 500 quality: 90) {
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

  const options = {
    renderNode: {
      'embedded-asset-block': () => {
        const url = body.references[0].fluid
        const alt = body.references[0].description

        return (<Img loading='eager' fluid={url} alt={alt} key={alt} />)
      },
    },
  }


  return (<Layout pageTitle={title} >
      <SEO title={title} description={description} />
        {documentToReactComponents(JSON.parse(body.raw), options)}
    </Layout>)
}

export default Project
