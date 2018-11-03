import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme, Box, Heading, Text, Link } from '../design-system'

import Layout from '../components/layout'
import Section from '../components/section'
import Project from '../components/project'
import MediaObj from '../components/mediaobj'

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Section title="Projects at Webflow" meta="2015–2018">
        <Project
          title="Webflow Grid"
          meta="2018"
          description="Designed a system allowing designers to visually create comdivlex
          web interactions and animations without any coding skills."
        >
          <Link fontStyle="italic" href="https://youtu.be/Z0TpdiMFVIk">
            First Look Video ->
          </Link>
          <Link fontStyle="italic" href="https://webflow.com/grid">
            Grid Playground ->
          </Link>
        </Project>

        <Project
          title="Webflow Interactions 2.0"
          meta="2017"
          description="Designed a system allowing designers to visually create complex
              web interactions and animations without any coding skills."
        >
          <Link href="https://youtu.be/RmTIx9I78QI">
            Webflow Interactions: First Look
          </Link>

          <Link href="https://webflow.com/interactions-animations">
            Product Overview
          </Link>
        </Project>

        <Project
          title="Webflow Flexbox"
          meta="2016"
          description="designed a visual interface to CSS Flexbox mechanism allowing
          designers to create expressive, responsive layouts on the web."
        />
      </Section>

      <Section title="Things I worked on before" meta="2012–2014">
        <Project
          title="Stampsy Web"
          description="worked as a designer (and partly as a
            front-end engineer) at <a href=&quot;http://stampsy.com&quot;>Stampsy</a> — a
            web platform for sharing and discovering visual stories. I designed
            the product and built a modular CSS architecture behind it."
        >
          <MediaObj
            link="https://www.youtube.com/watch?v=RmTIx9I78QI"
            title="IX2: First Look"
            subtitle="Quick Product Demo"
          />
          <MediaObj
            link="https://www.youtube.com/watch?v=RmTIx9I78QI"
            title="IX2: First Look"
            subtitle="Quick Product Demo"
          />
          <MediaObj
            link="https://www.youtube.com/watch?v=RmTIx9I78QI"
            title="IX2: First Look"
            subtitle="Quick Product Demo"
          />
        </Project>

        <Project
          title="Stampsy for iPad"
          description="in 2012, before becoming a web platform,
          Stampsy was an experimental iPad app for creating stories with a
          simple design editor. I designed and prototyped a lot of its
          touch-based interactions with different tools and codez."
        >
          <MediaObj
            Projectnk="https://www.youtube.com/watch?v=RmTIx9I78QI"
            title="IX2: First Look"
            subtitle="Quick Product Demo"
          />
          <MediaObj
            link="https://www.youtube.com/watch?v=RmTIx9I78QI"
            title="IX2: First Look"
            subtitle="Quick Product Demo"
          />
        </Project>
      </Section>

      <Section title="Miscellaneous">
        <Project
          description="At some point I designed a UI theme↗︎ for Sublime Text — a popular
          code editor. It has been installed by ~300k users and has ~7k stars on
          GitHub."
        />

        <Project
          description="During 2010–2012 I've freelanced and worked with various international
          startups, but most of the time I was just posting useless stuff↗︎ on
          Dribbble ¯\_(ツ)_/¯"
        />

        <Project
          description=" In my early twenties I've played a lot of World of Warcraft — a
          multiplayer online game. It's quite intense and requires a lot of
          concentration. I had a lot of fun designing and building custom
          interfaces for it, which improved my performance and overall game
          experience. I think that's what got me into design."
        />
      </Section>
    </Layout>
  </ThemeProvider>
)

export default IndexPage
