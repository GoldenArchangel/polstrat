import React from "react"
import { useSelector } from "react-redux"
import Footer from "../layout/footer/FooterComponent"
import LayoutWrapper from "./LayoutWrapper"

const LayoutComponent = ({ children }) => {
  const { healthCheck, loading } = useSelector(state => state.app)

  return (
    <LayoutWrapper maxWidth="1125px" lock={!healthCheck || loading}>
      <div className="content">{children}</div>
      <div className="footer">
        <Footer />
      </div>
    </LayoutWrapper>
  )
}

export default LayoutComponent
