import React from 'react'
import Helmet from 'react-helmet'
import { MDXProvider } from '@mdx-js/tag'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'

import { components, Root } from '../components/components'
import Readme from '../../README.md'
import '../../node_modules/@ibm/plex/css/ibm-plex.css'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'IBM Plex Serif', 'Georgia', Times, serif;
    margin: 0;
    background-color: #f8f9fa;
  }
`

const Layout = () => (
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
            { name: 'description', content: 'Product designer at Webflow' },
            { name: 'keywords', content: 'gadzhi, kharkharov' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <GlobalStyle />
        <MDXProvider components={components}>
          <Root>
            <Readme />
          </Root>
        </MDXProvider>
      </>
    )}
  />
)

export default Layout
