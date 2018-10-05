import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'
// import './layout.css'

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(2rem, 1fr) minmax(auto, 64rem) minmax(2rem, 1fr);
  grid-template-areas: '. content .';
`

const Content = styled.div`
  grid-area: content;
`

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
        </Helmet>
        <Container>
          <Content>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div>{children}</div>
            <Footer />
          </Content>
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
