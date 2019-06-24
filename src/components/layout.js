/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./default.css"

const getSiteMetaData = graphql`
  {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={getSiteMetaData}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
        </main>
        <Footer siteAuthor={data.site.siteMetadata.author} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
