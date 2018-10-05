import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  padding: 2rem 0;
`

const List = styled.ul`
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  justify-content: start;
  list-style: none;
  margin: 0;
  padding: 0;
`

const Item = styled.li`
  margin: 0;
`

const Footer = props => (
  <Container>
    <List>
      <Item>twitter</Item>
      <Item>github</Item>
      <Item>dribbble</Item>
      <Item>flickr</Item>
      <Item>😑</Item>
    </List>
  </Container>
)

export default Footer
