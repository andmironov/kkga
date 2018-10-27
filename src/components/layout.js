import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import system from 'system-components'
import { injectGlobal } from 'styled-components'

import { theme, Box } from '../design-system'

import Sidebar from './sidebar'
import './layout.css'

injectGlobal`
  @import url('https://rsms.me/inter/inter-ui.css');
  body{margin:0;}
`

const Root = system({
  bg: 'grays.0',
})

const Container = system({
  is: Box,
  bg: 'grays.0',
  color: 'grays.5',
  display: ['block', null, 'grid'],
  gridTemplateColumns: '3fr 9fr',
  gridTemplateAreas: '"sidebar main"',
  gridGap: theme.space[4],
  fontFamily: theme.fonts.sansSerif,
  lineHeight: theme.lineHeights.copy,
  maxWidth: 8,
  m: 'auto',
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
              minHeight={[theme.heights[4], null, '100vh']}
            />
            <Box px={[3, 4]} py={[0, 4]} gridArea="main">
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
