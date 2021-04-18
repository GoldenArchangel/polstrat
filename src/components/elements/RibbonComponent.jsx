import React, { useState } from "react"
import styled from "styled-components"
import { Dialog } from "primereact/dialog"
import { Button } from "primereact/button"

const RibbonWrapper = styled.div`
  .ribbon-button {
    margin: 10px;
    min-width: 95px;
  }

  .p-button .p-badge {
    background-color: #78909c;
    color: #1e1e1e;
    min-width: 1.6rem;
  }

  .ribbon-dialog {
    width: 90%;

    @media screen and (min-width: 576px) {
      width: 80%;
    }

    @media screen and (min-width: 768px) {
      width: 70%;
    }

    @media screen and (min-width: 1200px) {
      width: 700px;
    }
  }
`

const RibbonComponent = ({ index, badge, text }) => {
  const [displayBasic, setDisplayBasic] = useState(false)

  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
  }

  const onHide = name => {
    dialogFuncMap[`${name}`](false)
  }

  const onClick = name => {
    dialogFuncMap[`${name}`](true)
  }

  return (
    <RibbonWrapper className="ribbon-piece">
      <Button
        className="ribbon-button p-button-secondary p-button-outlined p-button-sm"
        type="button"
        label="R"
        badge={`${badge}`}
        onClick={() => onClick("displayBasic")}
      />
      <Dialog
        className="ribbon-dialog"
        header={`Ribbon ${badge}`}
        visible={displayBasic}
        onHide={() => onHide("displayBasic")}
        closeOnEscape
        dismissableMask
      >
        <p>{text}</p>
      </Dialog>
    </RibbonWrapper>
  )
}

export default RibbonComponent
