import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import { container, navbar,active } from './header.module.scss'

const Header = ({ activePage }) => {
  const {
    site: {
      siteMetadata: { title },
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
    <header className={container}>
      <nav className={`${navbar} ${container}`}>
        <ul>{createLinksPages(activePage)}</ul>
      </nav>
    </header>
  )
}

const createLinksPages = activePage => {
  const currentPages = ['home', 'projects']

  return currentPages.map(titlePage => {
    return (
      <li key={titlePage}>
        <Link className='link' activeClassName={active} to={`/${titlePage === 'home' ? '' : titlePage}`}>
          {titlePage}
        </Link>
      </li>
    )
  })
}

export default Header
