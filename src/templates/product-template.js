import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const ProductTemplate = ({ data: { contentfulProduct } }) => (
  <Layout>
    <div>
      <h2>
        {contentfulProduct.name} -{" "}
        <span style={{ color: "#ccc" }}>
          Added on {contentfulProduct.createdAt}
        </span>
      </h2>
      <p>{contentfulProduct.description}</p>
      <Img fluid={contentfulProduct.image.fluid} />
    </div>
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      name
      price
      description
      createdAt(formatString: "DD-MM-YYYY HH:mm:ss")
      image {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`

export default ProductTemplate
