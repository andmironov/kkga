import React from 'react'
import Helmet from 'react-helmet'
import { MDXProvider } from '@mdx-js/tag'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'

import { components, Root } from '../components/components'
import Readme from '../../README.md'

const GlobalStyle = createGlobalStyle`
  @import url('https://rsms.me/inter/inter-ui.css');
  body {
    font-family:'Inter UI', sans-serif;
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
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,400i,700,700i"
            rel="stylesheet"
          />
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
