import React from "react"
import { Grid, Box, Link } from "@material-ui/core"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { renderHtmlToReact } from "../components/render-html-to-react"

export default function TeamMembers() {
  return (
    <StaticQuery
      query={graphql`
        {
          allContentfulTeamMember {
            edges {
              node {
                eMail
                name
                picture {
                  fluid(maxHeight: 400) {
                    tracedSVG
                    src
                  }
                }
                role
                text {
                  childMarkdownRemark {
                    htmlAst
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Grid container spacing={6} justify="center" alignItems="flex-start">
          {data.allContentfulTeamMember.edges.map(({ node: teamMember }) => (
            <Grid
              item
              key={teamMember.id}
              xs={11}
              sm={6}
              md={4}
              lg={3}
            >
              
              <Box display="flex" justifyContent="center" mb={2}>
                <Img
                  style={{ margin: 0, height: 200, width: 200, borderRadius: 100 }}
                  imgStyle={{
                    objectFit: "contain",
                  }}
                  fluid={teamMember.picture.fluid}
                />
              </Box>
              <Box textAlign="center" fontWeight="fontWeightBold" color="secondary.main" lineHeight={2} fontSize={18}>{teamMember.name}</Box>
              <Box textAlign="center" fontWeight="fontWeightBold" lineHeight={2}>{teamMember.role}</Box>
              <Box textAlign="center" lineHeight={2}><Link color="inherit" href={"mailto:" +  teamMember.eMail}>{teamMember.eMail}</Link></Box>
              <Box p={1.5} textAlign="justify">{renderHtmlToReact(teamMember.text.childMarkdownRemark.htmlAst)}</Box>
            </Grid>
          ))}
        </Grid>
      )}
    />
  )
}
