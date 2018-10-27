import React from 'react'
import PropTypes from 'prop-types'
import system from 'system-components'
import { theme, Box, Text, Heading, Link, Image } from '../design-system'

const Container = system({
  // is: Link,
  display: 'flex',
  bg: 'grays.1',
  '&:hover': {
    bg: 'magenta',
    color: 'white',
  },
})

const MediaObj = props => (
  <Container
    is="a"
    href={props.link}
    target="_blank"
    css="text-decoration: none;"
  >
    {props.thumbnailUrl && (
      <Image
        height={2}
        maxWidth={3}
        mb={0}
        mr={2}
        src={props.thumbnailUrl}
        css="grid-row: 1/3;"
      />
    )}
    <Box display="flex" flexDirection="column" justifyContent="center" p={2}>
      <Heading color="grays.5" mb={2} fontSize={1} lineHeight="solid">
        {props.title}
      </Heading>
      <Text color="grays.4" m={0} fontSize={0} lineHeight="solid">
        {props.subtitle}
      </Text>
    </Box>
  </Container>
)

// MediaObj.propTypes = {
//   thumbnailUrl: PropTypes.string,
//   linkUrl: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   subtitle: PropTypes.string.isRequired,
//   type: PropTypes.oneOf('link', 'video'),
// }

MediaObj.defaultProps = {
  type: 'link',
  thumbnailUrl: 'https://placeimg.com/640/480/any',
}

export default MediaObj
