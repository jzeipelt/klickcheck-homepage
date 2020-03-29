import React from "react"
import Layout from "../components/layout"
import TeamMembers from "../components/team-members"
//import { renderHtmlToReact } from "../components/render-html-to-react"
import { Grid, Box } from "@material-ui/core"

const AboutUs = ({ data: { contentfulPage: page } }) => (
  <Layout title={page.title}>
    {/*renderHtmlToReact(page.content.childMarkdownRemark.htmlAst)*/}
    <Grid container justify="center" alignItems="flex-start">
      <Grid md={6} lg={5} xl={4} item>
        <Box textAlign="justify" p={3}>
          <h2>Das ist klickcheck</h2>
          <p>Mit klickcheck haben wir eine einfache Lösung für die Herausforderungen von Vermietunternehmen in der Baubranche entwickelt. Unsere App zur Schadensdokumentation macht die Übergabe und Rücknahme von Baumaschinen schneller und übersichtlicher und gibt Vermietern und deren Mitarbeitern so wieder mehr Zeit für die wichtigen Dinge.</p>
        </Box>
      </Grid>
      <Grid md={6} lg={5} xl={4} item>
        <Box textAlign="justify" p={3}>
          <h2>So arbeiten wir im Zeppelin Lab</h2>
          <p>Die Idee zu klickcheck stammt aus dem Zeppelin Lab. Die unabhängige Unternehmensschmiede des Zeppelin Konzerns ist 2016 in Berlin gestartet. Mit innovativen Geschäftsmodellen und agilen Methoden arbeitet das Zeppelin Lab daran neue digitale B2B Lösungen zu entwickeln, um die Baustelle der Zukunft effizienter, vernetzter und automatisierter zu machen.</p>
        </Box>
      </Grid>
    </Grid>
    <Box xs={11} textAlign="center" p={2} fontWeight="fontWeightBold" fontSize={20}>
      Durch Digitalisierung lösen wir gemeinsam mit unseren Kunden Probleme in der Baubranche.
    </Box>
    <Box xs={11} textAlign="center" p={2} fontWeight="fontWeightBold" fontSize={20}>
      Begleiten Sie uns!
    </Box>
    <Box xs={11} textAlign="center" p={5} fontWeight="fontWeightBold" fontSize={24}>
      Das Team hinter <span style={{color: 'rgb(0, 174, 239)'}}>klickcheck</span>
    </Box>
    <TeamMembers />
  </Layout>
)

export const query = graphql`
  {
    contentfulPage(title: { eq: "Über uns" }) {
      title
      slug {
        slug
      }
      content {
        childMarkdownRemark {
          htmlAst
        }
      }
    }
  }
`

export default AboutUs
