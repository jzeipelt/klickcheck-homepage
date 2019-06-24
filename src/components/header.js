import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import klickcheckLogo from "../images/auf-wei.svg"
import phone from "../images/phone.svg"
import mail from "../images/mail.svg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      margin: `0 auto 1.45rem`,
      maxWidth: 960,
      padding: `1.45rem 1.0875rem`,
      display: "flex",
      alignItems: "stretch",
      alignContent: "center",
      justifyContent: "flex-start",
    }}
  >
    <Link
      to="/"
      style={{
        height: "32px",
        margin: "auto 15px auto 0",
        fontSize: "0",
        lineHeight: "0",
      }}
    >
      <img
        src={klickcheckLogo}
        alt={siteTitle}
        style={{ height: "29px", margin: "0" }}
      />
    </Link>
    <Link to="/ueber-uns" style={{ margin: "auto 0" }}>
      Über uns
    </Link>
    <span style={{ flexGrow: "1" }} />
    <a
      href="tel:030290226333"
      style={{
        margin: "auto 15px auto 0",
        height: "29px",
        fontSize: "0.85rem",
      }}
    >
      <img
        src={phone}
        alt="Telefon: 030 / 290 226 333"
        style={{
          position: "relative",
          top: "3px",
          height: "20px",
          margin: "0 5px 0 0",
        }}
      />
      030 / 290 226 333
    </a>
    <a
      href="mailto:info@klickcheck.com"
      style={{
        margin: "auto 0",
        height: "29px",
        fontSize: "0.85rem",
      }}
    >
      <img
        src={mail}
        alt="E-Mail: info@klickcheck.com"
        style={{
          position: "relative",
          top: "4px",
          height: "20px",
          margin: "0 5px 0 0",
        }}
      />
      info@klickcheck.com
    </a>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
