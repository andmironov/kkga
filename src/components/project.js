import React from 'react'
import PropTypes from 'prop-types'

import { Box, Text, Heading } from '../design-system'

const Project = props => (
  <Box
    py={3}
    borderBottom="1px solid"
    borderColor="grays.2"
    display="grid"
    gridTemplateColumns="2fr 4fr"
  >
    <Box>
      {props.title && (
        <Heading mb={1} textStyle="caps">
          {props.title}
        </Heading>
      )}
      {/* {props.meta && <Text color="grays.6">{props.meta}</Text>} */}
      {props.children && (
        <Box display="grid" gridGap={1}>
          {props.children}
        </Box>
      )}
    </Box>
    <Text mb={2}>{props.description}</Text>
  </Box>
)

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  meta: PropTypes.string,
}

export default Project
