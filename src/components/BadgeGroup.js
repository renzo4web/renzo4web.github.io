import { Badge, Flex } from '@chakra-ui/react'
import { clearConfigCache } from 'prettier'
import React from 'react'

export const colorTec = {
  JAVASCRIPT: '"gray.900"',
  JS: '#ECC94B',
  WEBPACK: '#3182CE',
  SASS: '#9B2C2C',
  REACT: '#1e90ff',
  HTML: '#ED8936',
  SOUNDCLOUD: '#D69E2E',
  CSS: '#2C5282',
  BOOTSTRAP: '#322659',
  REDUX: '#794AC0',
  CHAKRAUI: '#43C7C0',
  FIREBASE: '#FFCB2B',
  HEROKU: '#624887',
  MERN: '#ff9375',
  TYPESCRIPT: '#2F74C0',
  FORMIK: '#172B4D',
  'MATERIAL-UI': '#007FFF',
}

const BadgeGroup = ({ arr = [] }) => {
  return (
    <React.Fragment>
      <Flex flexWrap="wrap">
        {arr.map(tec => {
          const hexCode = colorTec[tec.toUpperCase().trim()] || '#2D3748'
          const colorText =
            parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.2
              ? 'gray.900'
              : 'gray.100'
          return (
            <Badge
              key={tec.trim()}
              role="complementary"
              mr={2}
              mb={1}
              color={colorText}
              border={tec.toUpperCase() === 'MERN' && '1px'}
              borderColor={tec.toUpperCase() === 'MERN' && 'red'}
              bg={
                colorTec[tec.toUpperCase().trim()]
                  ? colorTec[tec.toUpperCase().trim()]
                  : 'cyan.900'
              }
            >
              {tec.trim()}
            </Badge>
          )
        })}
      </Flex>
    </React.Fragment>
  )
}

export default BadgeGroup
