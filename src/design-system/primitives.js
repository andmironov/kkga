import system from 'system-components'

export const Box = system(
  // core
  'space',
  'width',
  'color',
  'fontSize',
  'fontFamily',
  'fontStyle',
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
    fontSize: 2,
    lineHeight: 'copy',
    fontFamily: 'slab',
    color: 'grays.6',
  },
  'space',
  'color',
  'fontSize',
  'fontStyle',
  'lineHeight',
  'textStyle'
)
Text.displayName = 'Text'

// HEADING
export const Heading = system(
  {
    is: 'h1',
    m: 0,
    fontSize: 2,
    fontFamily: 'slab',
    lineHeight: 'copy',
    fontWeight: 6,
    color: 'grays.8',
  },
  'fontStyle',
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
  'height',
  'borders',
  'borderColor',
  'borderRadius'
)
Image.displayName = 'Image'

// LINK
export const Link = system(
  {
    is: 'a',
    color: 'inherit',
  },
  {
    '&:hover': {
      color: 'white',
    },
  },
  'fontStyle'
)
Link.displayName = 'Link'
