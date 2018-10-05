import React from 'react'
import styled from 'styled-components'

const Container = styled.header`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
`

const Header = props => (
  <Container>
    <h4>{props.siteTitle}</h4>
    <span>resume</span>
  </Container>
)

export default Header
