import React from 'react'
import system from 'system-components'

const setProps = base => Comp => props => <Comp {...base} {...props} />

export const Base = system({
  fontSize: [14, 16, 18],
  lineHeight: 1.5,
  p: 3,
  maxWidth: '36em',
  m: 'auto',
  color: '#353a3f',
})

export const p = system({
  is: 'p',
  my: 3,
})

export const Heading = system(
  {
    is: 'h2',
    mt: 4,
    mb: 3,
    fontSize: 'inherit',
    color: '#212529',
    lineHeight: 1,
    fontWeight: 'bold',
  },
  'borderBottom',
  'opacity'
)

export const a = system(
  {
    is: 'a',
    color: 'inherit',
  },
  `text-decoration-color: #adb5bd`
)

export const ul = system(
  {
    is: 'ul',
    mt: 3,
    mb: 3,
    pl: 0,
    fontSize: '0.875em',
  },
  `list-style: none;`
)

export const li = system({
  is: 'li',
  mb: 0,
  color: '#727981',
})

export const hr = system({
  is: 'hr',
  my: 4,
  border: 0,
  borderBottom: '1px dashed',
  color: '#adb5bd',
})

export const img = system({
  is: 'img',
  maxWidth: '100%',
})

export const components = {
  Heading,
  h1: setProps({ is: 'h1', color: 'inherit' })(Heading),
  h2: setProps({ is: 'h2' })(Heading),
  h3: setProps({ is: 'h3' })(Heading),
  h4: setProps({ is: 'h4' })(Heading),
  h5: setProps({ is: 'h5' })(Heading),
  h6: setProps({ is: 'h6' })(Heading),
  p,
  a,
  ul,
  li,
  hr,
  img,
}

export const Root = props => <Base>{props.children}</Base>
