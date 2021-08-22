import { TriangleDownIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Collapse,
  Flex,
  Image,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'

const CardImg = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Flex>
      <Image
        borderRadius="md"
        boxSize="50px"
        boxShadow="lg"
        objectFit="cover"
        src="https://media-exp1.licdn.com/dms/image/C510BAQF_zIelQWSBvw/company-logo_100_100/0/1519856321426?e=1637798400&v=beta&t=Eu1c7KUnhHy9zKDOgbrUpSEstitA7270FoCWtxheq14"
      />
      <Box>
        <Collapse startingHeight={20} in={isOpen} animateOpacity>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse fugit
            neque ab illo tempora. Impedit iusto ab nisi quibusdam? Omnis
            numquam itaque quos harum obcaecati ad a reiciendis suscipit natus?
          </Text>
        </Collapse>
      </Box>
      <Button onClick={onToggle}>
        <TriangleDownIcon />
      </Button>
    </Flex>
  )
}

export default CardImg
