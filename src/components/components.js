import React from 'react'
import system from 'system-components'

const setProps = base => Comp => props => <Comp {...base} {...props} />

export const Base = system({
  fontSize: [14, 16],
  lineHeight: 1.5,
  p: 3,
  maxWidth: '36em',
  m: 'auto',
  color: '#353a3f',
})

export const p = system({
  mb: 2,
  fontSize: 'inherit',
  fontFamily: "'IBM Plex Serif', 'Georgia', Times, serif",
})

export const Heading = system(
  {
    is: 'h2',
    mt: 4,
    mb: 4,
    fontSize: 'inherit',
    fontFamily: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif",
    color: '#212529',
    fontWeight: 'bold',
    lineHeight: 1.5,
  },
  'borderBottom',
  'opacity'
)

export const a = system(
  {
    is: 'a',
    color: '#353a3f',
  },
  `
  text-decoration-color: #939ba4;
  &:hover { text-decoration-color: currentColor;}
`
)

export const ul = system(
  {
    is: 'ul',
    mt: 2,
    mb: 4,
    pl: 4,
  },
  `list-style: circle;`
)

export const li = system({
  is: 'li',
  mb: 0,
  fontStyle: 'italic',
  color: '#939ba4',
  css: "font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;",
})

export const hr = system({
  is: 'hr',
  my: 5,
  border: 0,
  borderBottom: 1,
  color: 'inherit',
})

export const components = {
  Heading,
  h1: setProps({ is: 'h1' })(Heading),
  h2: setProps({
    is: 'h2',
    mt: 5,
    mb: 4,
    fontWeight: 'inherit',
    fontSize: '0.75em',
    borderBottom: 1,
    css:
      'display: inline-block; text-transform: uppercase; letter-spacing: 0.025em;',
  })(Heading),
  h3: setProps({ is: 'h3', my: 0 })(Heading),
  h4: setProps({ is: 'h4' })(Heading),
  h5: setProps({ is: 'h5' })(Heading),
  h6: setProps({ is: 'h6' })(Heading),
  p,
  a,
  ul,
  li,
  hr,
}

export const Root = props => <Base>{props.children}</Base>
