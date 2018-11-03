import React, { Children } from 'react'
import system from 'system-components'

const setProps = base => Comp => props => <Comp {...base} {...props} />

export const Base = system({
  fontSize: [13, 15],
  lineHeight: 1.5,
  p: 2,
  maxWidth: '40em',
  m: 'auto',
})

export const p = system({
  mb: 2,
  fontSize: 'inherit',
})

export const Heading = system({
  is: 'h2',
  mt: 4,
  mb: 2,
  fontSize: 'inherit',
  fontWeight: 'bold',
  lineHeight: 1.5,
})

export const a = system(
  {
    is: 'a',
    fontSize: 'inherit',
    fontStyle: 'italic',
    color: 'black',
  },
  `
  &:hover { background-color: pink;}
  text-decoration: none;
`
)

export const ul = system(
  {
    m: 0,
    p: 0,
  },
  `list-style: none;`
)

export const li = system({
  mb: 0,
  color: 'gray',
  fontStyle: 'italic',
})

export const hr = system({
  is: 'hr',
  mx: 0,
  my: 5,
  border: 0,
  borderBottom: 1,
})

export const components = {
  Heading,
  h1: setProps({ is: 'h1', mb: 4 })(Heading),
  h2: setProps({ is: 'h2', mb: 4, css: 'text-transform: uppercase;' })(Heading),
  h3: setProps({ is: 'h3' })(Heading),
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
