import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteAuthor }) => (
  <footer
    style={{
      background: `white`,
      margin: `0 auto 1.45rem`,
      maxWidth: 1200,
      padding: `1.45rem 1.0875rem`,
    }}
  >
    <span style={{ display: "flex", alignItems: "center" }}>
      <Link
        to="/"
        style={{
          width: "150px",
          margin: "0 10px 0 0",
        }}
      />
      © {new Date().getFullYear()}, Built by {siteAuthor}
    </span>
  </footer>
)

Footer.propTypes = {
  siteAuthor: PropTypes.string,
}

Footer.defaultProps = {
  siteAuthor: ``,
}

export default Footer
