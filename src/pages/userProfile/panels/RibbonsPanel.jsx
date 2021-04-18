import React from "react"
import { Panel } from "primereact/panel"
import RibbonComponent from "../../../components/elements/RibbonComponent"
import ribbonsText from "../../../utils/raw/ribbons"
import styled from "styled-components"

const RibbonsPanelWrapper = styled(Panel)`
  .ribbons-group {
    display: flex;
    flex-wrap: wrap;
  }

  .ribbon-piece {
  }
`

const RibbonsPanel = ({ data }) => {
  const { ribbons } = data

  return (
    <RibbonsPanelWrapper header="Ribbons">
      {typeof ribbons !== "undefined" ? (
        <p>
          <i className="pi pi-info-circle"></i> Click on the ribbon to show the
          information about it.
        </p>
      ) : null}

      <div className="ribbons-group">
        {typeof ribbons !== "undefined"
          ? Object.values(ribbons).map((ribbon, i) =>
              ribbon && typeof ribbon !== "string" ? (
                <RibbonComponent key={i} text={ribbonsText[i]} badge={i + 1} />
              ) : null
            )
          : "User doesn't have any ribbons"}
      </div>
    </RibbonsPanelWrapper>
  )
}

export default RibbonsPanel
