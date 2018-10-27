import system from 'system-components'
import { themeGet } from 'styled-system'
import styled from 'styled-components'

export const Box = system(
  // core
  'space',
  'width',
  'color',
  'fontSize',
  // borders
  'borders',
  'borderColor',
  'borderRadius',
  // layout
  'display',
  'maxWidth',
  'minWidth',
  'height',
  'maxHeight',
  'minHeight',
  // flexbox
  'alignItems',
  'alignContent',
  'justifyContent',
  'flexWrap',
  'flexDirection',
  'flex',
  'flexBasis',
  'justifySelf',
  'alignSelf',
  'order',
  // grid
  'gridTemplateColumns',
  'gridTemplateRows',
  'gridTemplateAreas',
  'gridColumn',
  'gridRow',
  'gridArea',
  'gridColumnGap',
  'gridRowGap',
  'gridGap',
  'gridAutoFlow',
  // position
  'position',
  'zIndex',
  'top',
  'right',
  'bottom',
  'left'
)
Box.displayName = 'Box'

// TEXT
export const Text = system(
  {
    fontSize: [1, 2],
    color: 'grays.4',
    fontFamily: 'sansSerif',
    fontStyle: 'normal',
  },
  'space',
  'color',
  'fontSize',
  'lineHeight'
)
Text.displayName = 'Text'

// HEADING
export const Heading = system(
  {
    is: 'h1',
    m: 0,
    fontSize: [1, 2],
    color: 'grays.5',
    fontFamily: 'sansSerif',
    fontStyle: 'italic',
  },
  'textStyle',
  'lineHeight'
)
Heading.displayName = 'Heading'

// IMAGE
export const Image = system(
  {
    is: 'img',
    m: 0,
  },
  'space',
  'width',
  'height'
)
Image.displayName = 'Image'

// LINK
export const Link = styled.a`
  text-decoration-color: ${themeGet('colors.grays.3')};
  text-decoration-style: dotted;
  color: inherit;
  &:hover {
    color: ${themeGet('colors.cyan')};
  }
`
Link.displayName = 'Link'
