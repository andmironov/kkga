import React from 'react'
import PropTypes from 'prop-types'

import { Box, Text, Heading } from '../design-system'

const Section = props => (
  <Box
    // display="grid"
    // gridGap={4}
    // gridTemplateColumns="repeat(auto-fit, minmax(320px, 1fr))"
    mb={5}
    {...props}
  >
    <Box
      // bg="grays.2"
      borderBottom="1px solid"
      borderColor="grays.3"
      gridColumn="1/-1"
      py={2}
      display="flex"
      justifyContent="start"
    >
      <Heading
        is="h2"
        fontStyle="italic"
        fontFamily="slab"
        fontWeight="normal"
        color="grays.7"
        lineHeight="solid"
      >
        {props.title}
      </Heading>
      <Text lineHeight="solid" textStyle="italic">
        , {props.meta}
      </Text>
    </Box>

    {props.children}
  </Box>
)

Section.propTypes = {
  title: PropTypes.string,
  meta: PropTypes.string,
}

export default Section
