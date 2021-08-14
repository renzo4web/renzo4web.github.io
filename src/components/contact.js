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
        <IconButton>
          <a
            title="GitHub Profile"
            tabIndex="1"
            target="_blank"
            href="https://github.com/renzo4web"
          >
            <SiGithub />
          </a>
        </IconButton>
        <IconButton>
          <a
            tabIndex="2"
            title="Twitter Profile"
            target="_blank"
            href="https://twitter.com/renzo4web"
          >
            <SiTwitter />
          </a>
        </IconButton>
        <IconButton>
          <a
            title="Linkedin Profile"
            tabIndex="3"
            target="_blank"
            href="https://www.linkedin.com/in/renzobarrios/"
          >
            <SiLinkedin />
          </a>
        </IconButton>
        <IconButton icon={<HiOutlineMail />}>
          <a title="My Email" tabIndex="4" target="_blank" href="mailto:renzobarrios@aol.com"></a>
        </IconButton>
      </HStack>
    </Center>
  )
}

export default Contact
