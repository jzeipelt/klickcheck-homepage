import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const Products = ({ data: { allContentfulProduct } }) => (
  <Layout>
    {allContentfulProduct.edges.map(({ node: product }) => (
      <div key={product.id}>
        <h2>Garb Products</h2>
        <Link to={`/products/${product.slug}`}>
          <h3>{product.name}</h3>
        </Link>
        <Img style={{ maxWidth: 300 }} fluid={product.image.fluid} />
      </div>
    ))}
  </Layout>
)

export const query = graphql`
  {
    allContentfulProduct {
      edges {
        node {
          id
          slug
          name
          image {
            fluid(maxWidth: 300) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default Products
