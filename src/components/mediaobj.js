import React from 'react'
import PropTypes from 'prop-types'
import system from 'system-components'
import { Box, Text, Heading, Link, Image } from '../design-system'
import { themeGet } from 'styled-system'

const Container = Link.extend`
  position: relative;
  display: flex;
  background-color: ${themeGet('colors.grays.1')};

  &:hover {
    background-color: ${themeGet('colors.grays.2')};
  }

  &::after {
    position: absolute;
    top: ${themeGet('space.1')}px;
    right: ${themeGet('space.1')}px;
  }
`

const MediaObj = props => (
  <Container href={props.link} target="_blank">
    {props.thumbnailUrl && (
      <Image
        height={48}
        mb={0}
        mr={2}
        src={props.thumbnailUrl}
        css="grid-row: 1/3;"
      />
    )}
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      p={[1, 2]}
    >
      <Heading color="grays.5" mb={[1, 2]} fontSize={[0, 1]} lineHeight="solid">
        {props.title}
      </Heading>
      <Text color="grays.4" m={0} fontSize={0} lineHeight="solid">
        {props.subtitle}
      </Text>
    </Box>
  </Container>
)

MediaObj.propTypes = {
  thumbnailUrl: PropTypes.string,
  linkUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  type: PropTypes.oneOf('link', 'video'),
}

MediaObj.defaultProps = {
  type: 'link',
  thumbnailUrl: 'https://placeimg.com/640/480/any',
}

export default MediaObj
