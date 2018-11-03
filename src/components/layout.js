import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import system from 'system-components'
import { themeGet } from 'styled-system'
import { injectGlobal, createGlobalStyle } from 'styled-components'

import { theme, Box } from '../design-system'

import Sidebar from './sidebar'
// import './layout.css'

// TODO: add iosevka font
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Archivo|Archivo+Black');
  * {box-sizing: border-box}
  body{
    margin:0;
    background-color: ${theme.colors.grays[1]};
  }
`

// const GlobalStyle = createGlobalStyle`
//   body {
//     color: ${props => (props.whiteColor ? 'white' : 'black')};
//   }
// `

const Root = system({
  fontFamily: 'slab',
  color: 'grays.6',
  fontSize: 2,
})

const Container = system({
  is: Box,
  display: ['block', null, 'grid'],
  gridTemplateColumns: '1fr 3fr',
  gridTemplateAreas: '"sidebar main"',
  gridGap: 5,
  maxWidth: 9,
  m: 'auto',
  px: [3, 4],
})

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans"
            rel="stylesheet"
          />
        </Helmet>
        <Root>
          <Container>
            <Sidebar
              title={data.site.siteMetadata.title}
              gridArea="sidebar"
              position={['static', 'static', 'sticky']}
              top={0}
              minHeight={theme.heights[4]}
              height={[null, null, '100vh']}
              py={4}
            />
            <Box py={4} gridArea="main">
              <div>{children}</div>
            </Box>
          </Container>
        </Root>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
