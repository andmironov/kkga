import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`

const LargeParagraph = styled.p`
  font-size: 1.25rem;
`

const IndexPage = () => (
  <Layout>
    <Grid>
      <div>
        <LargeParagraph>
          Working as a product designer at Webflow↗︎ — a tool that makes
          producing for web more approachable.
        </LargeParagraph>
        <LargeParagraph>
          Mostly trying to figure out how to create the right visual tools for
          designers.
        </LargeParagraph>
      </div>
      <div>
        <h4>Webflow Interactions 2.0</h4>
        <p>
          Designed a system allowing designers to visually create complex web
          interactions and animations without any coding skills.
        </p>
      </div>
      <div>
        <h4>Webflow Flexbox</h4>
        <p>
          Designed a visual interface to CSS Flexbox mechanism allowing
          designers to create expressive, responsive layouts on the web.
        </p>
      </div>
      <div>
        <h4>Stampsy Web</h4>
        <p>
          Worked as a designer (and partly as a front-end engineer) at Stampsy↗︎
          — a web platform for sharing and discovering visual stories. I
          designed the product and built a modular CSS architecture behind it.
        </p>
      </div>
      <div>
        <h4>Stampsy for iPad</h4>
        <p>
          In 2012, before becoming a web platform, Stampsy was an experimental
          iPad app for creating stories with a simple design editor. I designed
          and prototyped a lot of its touch-based interactions with different
          tools and codez.
        </p>
      </div>
      <div>
        <h4>Misc</h4>
        <p>
          At some point I designed a UI theme↗︎ for Sublime Text — a popular
          code editor. It has been installed by ~300k users and has ~7k stars on
          GitHub.
        </p>
        <p>
          During 2010–2012 I've freelanced and worked with various international
          startups, but most of the time I was just posting useless stuff↗︎ on
          Dribbble ¯\_(ツ)_/¯
        </p>
        <p>
          In my early twenties I've played a lot of World of Warcraft — a
          multiplayer online game. It's quite intense and requires a lot of
          concentration. I had a lot of fun designing and building custom
          interfaces for it, which improved my performance and overall game
          experience. I think that's what got me into design.
        </p>
      </div>
    </Grid>
  </Layout>
)

export default IndexPage
