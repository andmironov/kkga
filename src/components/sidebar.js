import React from 'react'

import { Box, Text, Heading, Link } from '../design-system'

const Sidebar = props => (
  <Box
    display={['block', null, 'flex']}
    justifyContent="space-between"
    flexDirection="column"
    {...props}
  >
    <Heading mb={2}>{props.title}</Heading>

    <Text mb={2}>
      Working as a product designer at{' '}
      <Link href="https://webflow.com/">Webflow</Link> — a tool that makes
      producing for web more approachable.
    </Text>
    <Text mb={2}>
      Mostly trying to figure out how to create the right visual tools for
      designers.
    </Text>
    <Box
      display="grid"
      gridGap={1}
      gridAutoFlow="column"
      justifyContent="start"
      fontFamily="slab"
      fontStyle="italic"
      mt={[null, 'auto']}
      color="grays.5"
    >
      <Link css="text-decoration: none;" href="#">
        email
      </Link>
      <Text color="grays.4">&middot;</Text>
      <Link css="text-decoration: none;" href="#">
        twitter
      </Link>
      <Text color="grays.4">&middot;</Text>
      <Link css="text-decoration: none;" href="#">
        github
      </Link>
      <Text color="grays.4">&middot;</Text>
      <Link css="text-decoration: none;" href="#">
        flickr
      </Link>
    </Box>
  </Box>
)

export default Sidebar
