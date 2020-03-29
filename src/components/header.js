import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import klickcheckLogo from "../images/klickcheck-logo-mit-text.svg"
import Login from "../components/login"

const useStyles = makeStyles(theme => ({
  header: {
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    background: "#FFF",
  },
  logo: {
    margin: 0,
  }
}))

export default function Header() {
  const classes = useStyles()

  return (
    <Grid
      className={classes.header}
      container
      spacing={2}
      component="header"
      alignItems="center"
    >
      <Grid item>
        <Link component={GatsbyLink} to="/">
          <img
            className={classes.logo}
            src={klickcheckLogo}
            alt="Home"
            width="200px"
          />
        </Link>
      </Grid>
      <Grid item>
        <Link component={GatsbyLink} color="secondary" to="/ueber-uns">
          Über uns
        </Link>
      </Grid>
      <Grid item xs zeroMinWidth />
      <Grid item>
        <Login />
      </Grid>
    </Grid>
  )
}
