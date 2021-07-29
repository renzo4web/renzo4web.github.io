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
    renderNode: {
      'embedded-asset-block': () => {
        console.log('CALLED')
        if (imgs.length > 0) return
        imgs = body.references.map(ref => {
          if (imgs.includes(ref)) return
          const url = ref.fluid
          const alt = ref.description
          console.log({ url, alt })
          return <Img loading="eager" fluid={url} alt={alt} key={alt.src} />
        })
        return imgs
      },
    },
  }

  return (
    <Layout pageTitle={title}>
      <SEO title={title} description={description} />
      {documentToReactComponents(JSON.parse(body.raw), options)}
    </Layout>
  )
}

export default Project
