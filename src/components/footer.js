import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link, Grid, Card, CardMedia } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import klickcheckGooglePlay from "../images/google-play-badge.png"
import klickcheckAppStore from "../images/app-store-badge.png"

const useStyles = makeStyles(theme => ({
  card: {
    padding: "5px 10px",
    background: "#000",
    border: "1px solid #888",
    "&:hover": {
      border: "1px solid #FFF",
    },
  },
  media: {
    width: "171px",
    height: "44px",
  },
  footer: {
    padding: theme.spacing(2),
    background: theme.palette.text.primary,
  },
}))

export default function Footer() {
  const classes = useStyles()

  return (
    <Grid
      className={classes.footer}
      container
      spacing={2}
      component="footer"
      alignItems="center"
    >
      <Grid item>
        <Link component={GatsbyLink} color="primary" to="/datenschutz">
          Datenschutz
        </Link>
      </Grid>
      <Grid item>
        <Link component={GatsbyLink} color="primary" to="/nutzungsbedingungen">
          Nutzungsbedingungen
        </Link>
      </Grid>
      <Grid item>
        <Link component={GatsbyLink} color="primary" to="/impressum">
          Impressum
        </Link>
      </Grid>
      <Grid item xs />
      <Grid
        item
      >
        <Grid container spacing={1}>
          <Grid item>
            <Link component={GatsbyLink} to="/google">
              <Card className={classes.card}>
                <CardMedia className={classes.media} image={klickcheckGooglePlay} />
              </Card>
            </Link>
          </Grid>
          <Grid item>
            <Link component={GatsbyLink} to="/apple">
              <Card className={classes.card}>
                <CardMedia className={classes.media} image={klickcheckAppStore} />
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
