import React from 'react'
import { Box, Heading, Text } from '../design-system'

const Section = props => (
  <Box mb={5}>
    <Box
      pb={[2, 3]}
      mb={4}
      display="flex"
      alignItems="baseline"
      justifyContent="space-between"
      borderBottom="1px solid"
      borderColor="grays.2"
    >
      <Heading textStyle="caps" color="grays.3" fontSize={0} m={0} is="h2">
        {props.title}
      </Heading>
      <Text textStyle="caps" color="grays.3" fontSize={0} m={0}>
        {props.meta}
      </Text>
    </Box>

    {props.children}
  </Box>
)

export default Section
