import React from 'react'

import { SiLinkedin } from '@react-icons/all-files/si/SiLinkedin'
import { SiGithub } from '@react-icons/all-files/si/SiGithub'
import { HiOutlineMail } from '@react-icons/all-files/hi/HiOutlineMail'
import { SiTwitter } from '@react-icons/all-files/si/SiTwitter'

const Contact = () => {
  return (
    <section className="contact">
      <ul>
        <li>
          <a
            title="GitHub Profile"
            tabIndex="1"
            target="_blank"
            href="https://github.com/renzo4web"
          >
            <SiGithub />
          </a>
        </li>
        <li>
          <a
            tabIndex="2"
            title="Twitter Profile"
            target="_blank"
            href="https://twitter.com/renzo4web"
          >
            <SiTwitter />
          </a>
        </li>
        <li>
          <a
            title="Linkedin Profile"
            tabIndex="3"
            target="_blank"
            href="https://www.linkedin.com/in/renzobarrios/"
          >
            <SiLinkedin />
          </a>
        </li>
        <li>
          <a title="My Email" tabIndex="4" target="_blank" href="mailto:renzobarrios@aol.com">
            <HiOutlineMail />
          </a>
        </li>
      </ul>
    </section>
  )
}


export default Contact