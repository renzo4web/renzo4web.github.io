import React from "react"
import { Box, Heading, HStack, Popover, PopoverContent, PopoverTrigger, Text } from '@chakra-ui/react'
import { QuestionIcon } from '@chakra-ui/icons'
import CardImg from './CardImg'

const VirtualExperiencePrograms =()=>{
  const certifications = [
    {
      img_url : 'https://media-exp1.licdn.com/dms/image/C510BAQF_zIelQWSBvw/company-logo_100_100/0/1519856321426?e=1637798400&v=beta&t=Eu1c7KUnhHy9zKDOgbrUpSEstitA7270FoCWtxheq14',
      title:"Software Engineering Virtual Experience",
      site:"JPMorgan Chase & Co",
      skills : [
        "Interface with a stock price data feed",
        "Use JPMorgan Chase frameworks and tools",
        "Display data visually for traders"
      ],
      certificate : "https://insidesherpa.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_JPMorgan%20Chase_3DxWEYsLeZXjcXot9_1629060102890_completion_certificate.pdf"

    },

    {
      img_url : 'https://media-exp1.licdn.com/dms/image/C4E0BAQEoboJe0-DUPg/company-logo_200_200/0/1625144835174?e=1637798400&v=beta&t=QdBZW4wCB4gPz8_S6HW6Ab1UnXYo8p-ed90czTlyikk',
      title:"Ready, Set, Agile! Virtual Experience Program",
      site:"Cognizant",
      skills : [
        "Waterfall vs Agile",
        "Role Assignments and Ceremonies",
        "Agile Tools and Concepts",
        "Agile Curve Balls"
      ],
      certificate : "https://insidesherpa.s3.amazonaws.com/completion-certificates/Cognizant/ZZswQd6xGydd758vz_Cognizant_3DxWEYsLeZXjcXot9_1629650203890_completion_certificate.pdf"
    },
  ]

  return(
    <Box
      as={"section"}
      borderBottom="4px solid"
      borderColor={'#53c8c4'}
      px={4}
      mx={[0, 0, 10]}
      my={"3em"}
    >
      <HStack spacing={5}>
        <Heading color={'green.500'} fontSize={'lg'} textAlign={'left'}>Virtual Experience Programs</Heading>
        <Popover>
          <PopoverTrigger>
            <QuestionIcon cursor={'pointer'} role={"info"} aria-label={'info about virtual experience programs'} />
          </PopoverTrigger>
          <PopoverContent p={4}>
            <Text fontSize={'sm'} textAlign={'left'}>
              Virtual Work Experience Programs are online programs built and endorsed by leading companies. They contain a series of resources and tasks designed to simulate the real-world experience of starting a career.
            </Text>
          </PopoverContent>
        </Popover>
      </HStack>

      {
        certifications.map(cer=> <CardImg key={cer.img_url}  {...cer} />)
      }
    </Box>
  )
}

export default VirtualExperiencePrograms