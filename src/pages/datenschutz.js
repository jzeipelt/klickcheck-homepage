import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { renderHtmlToReact } from "../components/render-html-to-react"

const DataPrivacy = ({ data: { contentfulPage: page } }) => (
  <Layout title={page.title}>
    {renderHtmlToReact(page.content.childMarkdownRemark.htmlAst)}
  </Layout>
)

export const query = graphql`
  {
    contentfulPage(title: { eq: "Datenschutz" }) {
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

export default DataPrivacy
