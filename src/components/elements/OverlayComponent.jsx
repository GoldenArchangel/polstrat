import React from "react"
import { Toast } from "primereact/toast"
import { setResetOverlay } from "../../store/actions/overlay"
import { overlayState } from "../../store/reducers/overlay"
import styled from "styled-components"

const overlayType = overlay => {
  const { message } = overlay

  // Lets see if the overlay is a message or a confirm
  return message["messageActive"] !== undefined && "message"
}

export const overlayAppDisplay = (overlayRef, overlay, dispatch) => {
  const { message } = overlay

  if (message.messageActive) {
    overlayRef.current.show(message)
  }

  if (message.messageActive) {
    dispatch(setResetOverlay(overlayState))
  }
}

const OverlayWrapper = styled(Toast)`
  max-width: 350px;
  font-size: 14px;
  opacity: 0.98;

  i {
    font-size: 2rem;
  }
`

export const OverlayComponent = ({ overlayRef, overlay }) => {
  let type = overlayType(overlay)

  return (
    <OverlayWrapper
      ref={overlayRef}
      position={overlay[type].position || "top-right"}
    />
  )
}
