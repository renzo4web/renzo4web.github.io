import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import { footer } from './footer.module.scss'

const Footer = ({ children }) => {
  const {
    site: {
      siteMetadata: { author },
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
    <footer className={footer}>
      {children}
      <p>Crafted By {author} © 2021</p>
      <p>That's it. Seeya later friend ¯\_(ツ)_/¯</p>
      <Link to="/thanks">Thanks!!!</Link>
    </footer>
  )
}

export default Footer
