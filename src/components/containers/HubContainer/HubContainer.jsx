import React from "react"
import HubContainerWrapper from "./HubContainerWrapper"

const HubContainer = ({ title, subTitle, menu, children }) => {
  return (
    <HubContainerWrapper>
      <div className="hub-header">
        <div className="hub-title">
          <h3 className="share-tech-mono">{title}</h3>
        </div>
        <div className="hub-subheader">
          <div className="hub-subtitle">
            <div className="hub-subtitle-display">
              <h2 className="share-tech-mono">{subTitle}</h2>
            </div>
          </div>
          {menu ? <div className="hub-menu">{menu}</div> : null}
        </div>
      </div>
      <div className="hub-body">{children}</div>
    </HubContainerWrapper>
  )
}

export default HubContainer
