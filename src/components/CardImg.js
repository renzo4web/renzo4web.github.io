import { ExternalLinkIcon, TriangleDownIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Collapse,
  Flex, Heading,
  Image, List, ListIcon, ListItem,
  Text, UnorderedList, useColorModeValue,
  useDisclosure, Link, VStack
} from '@chakra-ui/react'
import React from 'react'
import { MdCheckCircle } from '@react-icons/all-files/md/MdCheckCircle'

const CardImg = ({img_url,skills,site,title,certificate}) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Flex
      my={"1em"}
      w={'100%'}
      shadow={'md'}
      direction={['column', 'row']}
      p={"1em"}
      borderRadius={10}
      alignItems={'flex-start'}
      justifyContent={'space-between'}
      bg={useColorModeValue('gray.100', '#1e2533')}
    >
      <Image
        borderRadius='md'
        boxSize='50px'
        mb={"auto"}
        boxShadow='lg'
        objectFit='cover'
        src={img_url}
      />
      <Box ml={["0","1rem"]} mr={'auto'} justifySelf={'flex-start'}>
        <VStack
          align={'start'}
        >

          <Heading textAlign={"left"} mt={["10px","0"]}  fontWeight={'bold'}  fontSize={"md"}>{site}</Heading>
          <Heading textAlign={"left"} mt={["10px","0"]}   fontSize={"sm"}>{title}</Heading>
          <Collapse  textAlig={'left'}  in={isOpen} animateOpacity>
            <List  mt={'1em'}  fontSize='1rem' textAlign='left'>{
              skills.map(text => (
                <ListItem key={text}>
                  <ListIcon as={MdCheckCircle} color={"green.500"} />
                  {text}
                </ListItem>
              ))
            }</List>
            <Link display={'block'} my={4} fontSize={'sm'} textAlign={'left'} mr={'auto'} href={certificate} isExternal>
              <ExternalLinkIcon mx={3} />
              Certificate</Link>
          </Collapse>
        </VStack>
      </Box>
      <Button mt={["1em", "0"]}  onClick={onToggle} variant={"link"} ml={["0", "1em"]}>
        <TriangleDownIcon w={3} h={3}  />
      </Button>
    </Flex>
  )
}

export default CardImg
