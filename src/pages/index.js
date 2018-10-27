import React from 'react'
import { styled, ThemeProvider } from 'styled-components'
import { theme, Box, Heading, Text } from '../design-system'
import system from 'system-components'

import Layout from '../components/layout'
import MediaObj from '../components/mediaobj'
import Section from '../components/section'

const Grid = system({
  is: Box,
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 50)',
})

const Project = props => (
  <Box
    mb={4}
    pb={4}
    display="grid"
    gridTemplateColumns={['1fr', '2fr 2fr', '4fr 2fr']}
    gridGap={4}
    borderBottom="1px solid"
    borderColor="grays.1"
  >
    <Box>
      <Heading mb={2}>{props.title}</Heading>
      <Text>{props.description}</Text>
    </Box>
    {props.children && (
      <Box display="grid" gridGap="2px">
        {props.children}
      </Box>
    )}
  </Box>
)

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Section title="Projects at Webflow" meta="2015–2018">
        <Project
          title="Webflow Grid"
          description="Designed a system allowing designers to visually create comdivlex
          web interactions and animations without any coding skills."
        >
          <MediaObj
            link="https://www.youtube.com/watch?v=RmTIx9I78QI"
            title="Webflow Grid: First Look"
            subtitle="Quick Product Demo"
          />

          <MediaObj
            link="https://www.youtube.com/watch?v=RmTIx9I78QI"
            title="IX2: First Look"
            subtitle="Quick Product Demo"
          />
        </Project>

        <Project
          title="Webflow Interactions 2.0"
          description="Designed a system allowing designers to visually create complex
              web interactions and animations without any coding skills."
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
          title="Webflow Flexbox"
          description="designed a visual interface to CSS Flexbox mechanism allowing
          designers to create expressive, responsive layouts on the web."
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
