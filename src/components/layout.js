/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider, makeStyles } from "@material-ui/core/styles"
import { Box, CssBaseline } from "@material-ui/core"
import SEO from "../components/seo"

import Klickcheck from "./klickcheck-theme"
import Header from "./header"
import Footer from "./footer"
import { StateProvider } from '../hooks/store'

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

const useStyles = makeStyles(theme => ({
  main: {
    padding: theme.spacing(2),
  },
}))

export default function Layout({ title, children }) {
  const classes = useStyles()

  return (
    <StaticQuery
      query={getSiteMetaData}
      render={data => (
        <StateProvider>
          <ThemeProvider theme={Klickcheck}>
            <SEO
              title={title}
              keywords={[`klickcheck`, `Schadensdokumentation`]}
            />
            <CssBaseline />
            <Header className={classes.header} />
            <Box component="main" className={classes.main}>
              {children}
            </Box>
            <Footer className={classes.footer} />
          </ThemeProvider>
        </StateProvider>
      )}
    />
  )
}
