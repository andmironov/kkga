import React from 'react'

import { Box, Text, Heading, Link } from '../design-system'

const Sidebar = props => (
  <Box
    bg="grays.1"
    px={[3, 4]}
    py={[3, 4]}
    display="flex"
    justifyContent="space-between"
    // borderRight={['none', null, '1px solid']}
    // borderBottom={['1px solid', null, 'none']}
    // borderColor={['black', null, 'black']}
    flexDirection="column"
    {...props}
  >
    <Box>
      <Heading mb={3}>{props.title}</Heading>
    </Box>
    <Text mb={2}>
      Working as a product designer at{' '}
      <Link href="https://webflow.com/">Webflow</Link> — a tool that makes
      producing for web more approachable.
    </Text>
    <Text>
      Mostly trying to figure out how to create the right visual tools for
      designers.
    </Text>
    <Box
      display="grid"
      gridGap={3}
      gridAutoFlow="column"
      justifyContent="start"
      fontSize={[0, 1]}
      color="grays.3"
      mt="auto"
    >
      <Link href="#">email</Link>
      <Link href="#">twitter</Link>
      <Link href="#">github</Link>
      <Link href="#">dribbble</Link>
      <Link href="#">flickr</Link>
    </Box>
  </Box>
)

export default Sidebar
