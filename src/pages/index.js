import React from 'react'

// import Layout from '../components/layout'
import styled from 'styled-components'
import Header from '../components/header'

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(2rem, 1fr) minmax(auto, 64rem) minmax(2rem, 1fr);
  grid-template-areas: '. content .';
`

const Content = styled.div`
  grid-area: content;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`

const LargeParagraph = styled.p`
  font-size: 1.5rem;
`

const IndexPage = () => (
  <Container>
    <Content>
      <Header />
      <Grid>
        <div>
          <LargeParagraph>Working as a product designer at Webflow↗︎ — a tool that makes producing for web more approachable.</LargeParagraph>
          <LargeParagraph>Mostly trying to figure out how to create the right visual tools for designers.</LargeParagraph>
        </div>
        <p>
          From Richard Hamming’s classic and must-read talk, “
          <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
            You and Your Research
          </a>
          ”.
        </p>
        <blockquote>
          <p>
            There is indeed an element of luck, and no, there isn’t. The prepared
            mind sooner or later finds something important and does it. So yes, it
            is luck.{" "}
            <em>
              The particular thing you do is luck, but that you do something is
              not.
            </em>
          </p>
        </blockquote>
      </Grid>
    </Content>
  </Container>
)

export default IndexPage
