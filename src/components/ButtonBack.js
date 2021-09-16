import { Button } from '@chakra-ui/react'
import { ArrowLeftIcon } from '@primer/octicons-react'
import { Link } from 'gatsby'
import React from 'react'

const ButtonBack = () => {
  return (
    <>
      <Link to="/">
        <Button variant="outline" leftIcon={<ArrowLeftIcon />} as="span">
          Go Back
        </Button>
      </Link>
    </>
  )
}

export default ButtonBack
