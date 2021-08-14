import { Badge, Flex } from '@chakra-ui/react'
import React from 'react'

export const colorTec = {
  JAVASCRIPT: 'yellow.400',
  JS: 'yellow.400',
  WEBPACK: 'blue.500',
  SASS: 'red.700',
  REACT: 'cyan.400',
  HTML: 'orange.500',
  SOUNDCLOUD: 'orange',
  CSS: 'blue.700',
  BOOTSTRAP: 'purple',
}

const BadgeGroup = ({ arr = [] }) => {
  return (
    <React.Fragment>
      <Flex flexWrap="wrap">
        {arr.map(tec => (
          <Badge
            aria-aria-labelledby={tec}
            role="complementary"
            mr={2}
            mb={1}
            color="gray.900"
            bg={
              colorTec[tec.toUpperCase().trim()] ? colorTec[tec.toUpperCase().trim()] : 'gray.400'
            }
          >
            {tec.trim()}
          </Badge>
        ))}
      </Flex>
    </React.Fragment>
  )
}

export default BadgeGroup
