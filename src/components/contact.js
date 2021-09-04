import React from 'react'

import { SiLinkedin } from '@react-icons/all-files/si/SiLinkedin'
import { SiGithub } from '@react-icons/all-files/si/SiGithub'
import { HiOutlineMail } from '@react-icons/all-files/hi/HiOutlineMail'
import { SiTwitter } from '@react-icons/all-files/si/SiTwitter'
import { Center, HStack, IconButton } from '@chakra-ui/react'

const Contact = () => {
  return (
    <Center my={4}>
      <HStack spacing="1em">
        <a
          title="GitHub Profile"
          tabIndex="1"
          target="_blank"
          href="https://github.com/renzo4web"
        >
          <IconButton as="span">
            <SiGithub />
          </IconButton>
        </a>
        <a
          tabIndex="2"
          title="Twitter Profile"
          target="_blank"
          href="https://twitter.com/renzo4web"
        >
          <IconButton as="span">
            <SiTwitter />
          </IconButton>
        </a>
        <a
          title="Linkedin Profile"
          tabIndex="3"
          target="_blank"
          href="https://www.linkedin.com/in/renzobarrios/"
        >
          <IconButton as="span">
            <SiLinkedin />
          </IconButton>
        </a>
        <a
          title="My Email"
          tabIndex="4"
          target="_blank"
          href="mailto:renzobarrios@aol.com"
        >
          <IconButton as="span" icon={<HiOutlineMail />}></IconButton>
        </a>
      </HStack>
    </Center>
  )
}

export default Contact
