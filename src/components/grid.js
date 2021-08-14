import React from 'react'

import { Link } from 'gatsby'
import {
  Box,
  Grid as GridUI,
  useColorModeValue,
  ScaleFade,
  Text,
  Button,
  Tooltip,
} from '@chakra-ui/react'
import { MotionBox } from './ui/motion'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import BadgeGroup from './BadgeGroup'

const Grid = ({ list, withImg }) => {
  console.log(list)
  return (
    <GridUI
      my={7}
      justifyContent="center"
      templateColumns="repeat(auto-fit,minmax(350px,1fr))"
      gap={4}
      role="grid"
    >
      {list.map(({ node }) => {
        if (!node) {
          throw new Error('Node invalid check component')
        }

        return (
          <MotionBox m={0} w="100%" whileHover={{ y: -5 }} key={node.id}>
            <ScaleFade initialScale={0.9} in={true}>
              <Box
                h="100%"
                p={3}
                border="1px"
                borderRadius={10}
                borderColor={useColorModeValue('gray.50', 'gray.800')}
                shadow="md"
                bg={useColorModeValue('gray.100', '#1e2533')}
                textAlign="left"
                fontSize="1.5rem"
                _hover={{
                  shadow: 'lg',
                }}
              >
                <BadgeGroup arr={node.technologiesUsed.split(',')} />
                <Text fontWeight="bold" color="green.500" mt={2} lineHeight={1.2}>
                  {node.title}
                </Text>
                <Tooltip label={node.description.length > 65 && node.description}>
                  <Text my={2} fontSize="md" maxWidth="400px" isTruncated>
                    {node.description}
                  </Text>
                </Tooltip>
                <Link to={`/project/${node.slug}`}>
                  <Button
                    aria-label={`Read more about ${node.title}`}
                    as="p"
                    variant="outline"
                    _hover={{
                      bgGradient: 'linear(to-r, teal.500,green.500)',
                      border: 'none',
                    }}
                    rightIcon={<ArrowForwardIcon />}
                  >
                    Read More
                  </Button>
                </Link>
              </Box>
            </ScaleFade>
          </MotionBox>
        )
      })}
    </GridUI>
  )
}

export default Grid
