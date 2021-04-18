import React, { useState } from "react"
import FooterWrapper from "./FooterWrapper"
import { Link } from "react-router-dom"
import { Card } from "primereact/card"
import polHubLogo from "../../../assets/images/polhub-white.png"
import { ScrollTop } from "primereact/scrolltop"

const FooterComponent = () => {
  const today = new Date()
  const [anim, setAnim] = useState(false)

  return (
    <FooterWrapper>
      <Card className="footer-card">
        <div className="footer-logo">
          <Link to="/">
            <img
              className="hover-spin"
              alt="logo"
              src={polHubLogo}
              onMouseEnter={() => setAnim(true)}
              onMouseLeave={() => setAnim(false)}
            ></img>
          </Link>
        </div>

        <div className="footer-title">
          <h2
            className={anim ? "share-tech-mono color-anim" : "share-tech-mono"}
          >
            Polstrat
          </h2>
          <span
            className={anim ? "share-tech-mono color-anim" : "share-tech-mono"}
          >
            Community Hub
          </span>
        </div>
        <div className="footer-links share-tech-mono">
          <Link to="/support">Support</Link>
          <span> ∙ </span>
          <Link to="/tos">Terms of Service</Link>
          <span> ∙ </span>
          <Link to="/contacts">Contacts</Link>
        </div>
        <div className="footer-bottom">
          <small>
            {today.getFullYear()} <Link to="/">Polstrat</Link> - Community Hub
          </small>
        </div>

        <ScrollTop icon="pi pi-chevron-up" behavior="smooth" />
      </Card>
    </FooterWrapper>
  )
}

export default FooterComponent
