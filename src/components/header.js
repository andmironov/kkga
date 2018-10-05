import React from 'react'
import styled from 'styled-components'

const Container = styled.header`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  `
  
const Header = props => (
  <Container>
    <h4>Gadzhi Kharkharov, ~designer</h4>
    <a href='#'>resume</a>
  </Container>
)

export default Header