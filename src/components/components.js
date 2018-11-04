import React from 'react'
import system from 'system-components'

const setProps = base => Comp => props => <Comp {...base} {...props} />

export const Base = system({
  fontSize: [14, 15],
  lineHeight: 1.5,
  p: 3,
  maxWidth: '40em',
  m: 'auto',
  color: '#51575e',
})

export const p = system({
  mb: 2,
  fontSize: 'inherit',
})

export const Heading = system(
  {
    is: 'h2',
    mt: 4,
    mb: 4,
    fontSize: 'inherit',
    color: '#353a3f',
    fontWeight: '600',
  },
  'borderBottom',
  'opacity'
)

export const a = system(
  {
    is: 'a',
    color: '#51575e',
  },
  `
  text-decoration-style: dotted;
  &:hover { text-decoration-style: solid;}
`
)

export const ul = system(
  {
    is: 'ul',
    mt: 2,
    mb: 4,
    p: 0,
  },
  `list-style: none;`
)

export const li = system({
  is: 'li',
  mb: 0,
  fontStyle: 'italic',
  color: '#939ba4',
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
    fontWeight: 'normal',
    borderBottom: 1,
    css: 'text-transform: uppercase; letter-spacing: 0.02em;',
  })(Heading),
  h3: setProps({ is: 'h3', mb: 0 })(Heading),
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
