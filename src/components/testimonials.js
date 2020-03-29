import React from "react"
import { Grid, Box, SvgIcon } from "@material-ui/core"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Testimonials() {
  return (
    <StaticQuery
      query={graphql`
        {
          allContentfulTestimonial(sort: {fields: company}) {
            edges {
              node {
                id
                company
                person
                text
                logo {
                  fixed(height: 48) {
                    src
                    ...GatsbyContentfulFixed
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Grid container spacing={6} justify="center" alignItems="center">
          {data.allContentfulTestimonial.edges.map(({ node: testimonial }) => (
            <Grid
              item
              key={testimonial.id}
              xs={11}
              sm={6}
              md={4}
              lg={3}
            >
              <Box p={1.5} borderRadius={6} textAlign="center" bgcolor="secondary.main" color="#FFF">{testimonial.text}</Box>
              <Box display="flex" justifyContent="center">
                <SvgIcon color="secondary"><polygon points="12,24 24,0 0,0" /></SvgIcon>
              </Box>
              <Box textAlign="center" fontWeight="fontWeightBold" color="secondary.main" lineHeight={3}>{testimonial.person}</Box>
              <Box display="flex" justifyContent="center">
                <Img
                  style={{ margin: 0, maxHeight: 24, maxWidth: 200 }}
                  imgStyle={{
                    objectFit: "contain",
                  }}
                  fixed={testimonial.logo.fixed}
                />
              </Box>
              <Box textAlign="center" fontWeight="fontWeightBold" lineHeight={3}>{testimonial.company}</Box>
            </Grid>
          ))}
        </Grid>
      )}
    />
  )
}
