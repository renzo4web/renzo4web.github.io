import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import Contact from '../components/contact'

import { box, container } from './run.module.scss'
import { UnorderedList } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
const Run = () => {
  const username = 'renzo4web'
  const sites = [
    { name: 'Personal Site', url: '/', local: true },
    { name: 'Resume', url: '/resume.pdf', local: false },
    { name: 'Codewars', url: 'https://www.codewars.com/users/renzo4web' },
    {
      name: 'FreeCodeCamp',
      url: 'https://www.freecodecamp.org/renzo4web',
    },
    {
      name: 'Frontend Mentor',
      url: 'https://www.frontendmentor.io/profile/w3renzo',
    },
    {
      name: 'Poliwork',
      url: 'https://www.polywork.com/renzo4web',
    },
  ]
  return (
    <div className={container}>
      <SEO title="Links" description="All my links" />
      <img src={`https://github.com/renzo4web.png?size=100`} alt={`${username} avatar`} />
      <h1>@{username}</h1>
      <Contact />
      <UnorderedList m={0}>
        {sites.map(({ name, url, local }) => (
          <li style={{ listStyle: 'none' }} className={box} key={url}>
            {local ? (
              <Link to={url}>{name}</Link>
            ) : (
              <a href={url}>
                {name}
                <ExternalLinkIcon ml={2} />
              </a>
            )}
          </li>
        ))}
      </UnorderedList>
    </div>
  )
}

export default Run
