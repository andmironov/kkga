import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Box, Text, Heading, Link, Image } from '../design-system'
import { themeGet } from 'styled-system'

const Container = styled(Link)`
  position: relative;
  display: flex;
  text-decoration: none;
  background-color: ${themeGet('colors.grays.2')};
  &::after {
    content: '>';
    position: absolute;
    top: ${themeGet('space.2')}px;
    right: ${themeGet('space.2')}px;
  }
  &:hover {
    background-color: ${themeGet('colors.grays.3')};
    /* color: ${themeGet('colors.black')}; */
  }
`

const MediaObj = props => (
  <Container href={props.link} target="_blank">
    {props.thumbnailUrl && (
      <Image height={48} src={props.thumbnailUrl} css="grid-row: 1/3;" />
    )}
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      p={[1, 2]}
      pl={3}
    >
      <Heading mb={1} fontFamily="narrow" fontWeight={5}>
        {props.title}
      </Heading>
      <Text fontFamily="narrow" m={0}>
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
