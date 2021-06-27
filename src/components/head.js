import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const Head = ({ title: titleSite }) => {
  const {
    site: {
      siteMetadata: { title: siteName },
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
    <Helmet name="description" title={`${titleSite} | ${siteName}`} />
  )
}

export default Head
