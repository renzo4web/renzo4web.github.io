import React from 'react'

import {
  Box,
  Stack,
  Link,
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const LinkList = ({ to, children, ...rest }) => {
  return (
    <Link role="link" href={to} _hover={{ color: 'teal.500' }} isExternal>
      {children}
      <ExternalLinkIcon mx="2px" />
    </Link>
  )
}

const Highlights = () => {
  return (
    <>
      <Box mt={10}>
        <Stack
          mb={10}
          mx={[0, 0, 10]}
          padding={4}
          align="start"
          borderLeft="4px solid"
          borderColor={'#53c8c4'}
          color={'whatsapp'}
          _hover={{ shadow: 'lg' }}
          bg={useColorModeValue('gray.100', '#1e2533')}
          rounded="sm"
          fontSize="md"
        >
          <Text textAlign="left" color="green.500">
            Highlights / Posts
          </Text>
          <UnorderedList textAlign="left" paddingLeft={5} m={0}>
            <ListItem textAlign="left">
              <LinkList to="https://gist.github.com/renzo4web/0f91f5a1fd86c0837bd0ee367b1d1af7">
                Understanding Javascript array methods, implementing them with
                Array.reduce()
              </LinkList>
            </ListItem>

            <ListItem>
              <LinkList to="https://collectednotes.com/renzo4web/promise-allsettled-is-great">
                Promise.allSettled Is Great
              </LinkList>
            </ListItem>
            <ListItem>
              <LinkList to="https://github.com/renzo4web/super-coin">
                Blockchain from scratch with NodeJS and Typescript
              </LinkList>
            </ListItem>
          </UnorderedList>
        </Stack>
      </Box>
    </>
  )
}

export default Highlights
