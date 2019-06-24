import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Advantages = styled.div`
  display: grid;
  width: 100%;
  grid: auto / 25% 25% 25% 25%;
  font-size: 16px;
  @media (max-width: 660px) {
    grid: auto / 50% 50%;
    font-size: 14px;
  }
  @media (max-width: 360px) {
    grid: auto / 100%;
    font-size: 13px;
  }
`

const Button = styled.button`
  font-size: 1em;
  font-weight: 500;
  letter-spacing: 0.05em;
  line-height: 1.25;
  border-radius: 0.25em;
  text-transform: uppercase;
  padding: 0.9em 1.8em;

  background-color: #00aeef;
  border-color: #fff;
  color: #fff;
  &:hover {
    background-color: #0d87e9;
  }
`

const IndexPage = ({ data: { contentfulHomepage: homepage } }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>{homepage.title}</h1>
    <p>
      {homepage.subtext}
      <br />
      <Button>{homepage.buttontext}</Button>
    </p>

    <Advantages id="advantages">
      {homepage.advantages.map(advantage => (
        <div key={advantage.title}>
          <img
            style={{ display: "block", width: "4em", margin: "0 auto" }}
            src={advantage.file.url}
            alt={advantage.description}
          />
          <p
            style={{
              display: "block",
              textAlign: "center",
              margin: "8px 10px 16px 10px",
              fontSize: "0.9em",
              fontWeight: "bold",
            }}
          >
            {advantage.description}
          </p>
        </div>
      ))}
    </Advantages>
  </Layout>
)

export const query = graphql`
  {
    contentfulHomepage(node_locale: { eq: "de-DE" }) {
      buttontext
      subtext
      title
      advantagetext
      advantages {
        title
        description
        file {
          url
        }
      }
    }
  }
`

export default IndexPage
