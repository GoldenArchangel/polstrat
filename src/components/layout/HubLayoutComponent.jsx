import React from "react"
import { useSelector } from "react-redux"
import HubHeaderComponent from "./header/HubHeaderComponent"
import FooterComponent from "./footer/FooterComponent"
import HubLayoutWrapper from "./HubLayoutWrapper"

const HubLayoutComponent = ({ children, props }) => {
  const { healthCheck, loading } = useSelector(state => state.app)

  return (
    <HubLayoutWrapper maxWidth="1260px" lock={!healthCheck || loading}>
      <div className="header">
        <HubHeaderComponent {...{ props }} />
      </div>
      <div className="content">{children}</div>
      <div className="footer">
        <FooterComponent />
      </div>
    </HubLayoutWrapper>
  )
}

export default HubLayoutComponent
