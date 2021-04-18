import { MESSAGE_OVERLAY, RESET_OVERLAY } from "../types"

export const setMessageOverlay = options => {
  return {
    type: MESSAGE_OVERLAY,
    payload: options,
  }
}

export const setResetOverlay = options => {
  return {
    type: RESET_OVERLAY,
    payload: options,
  }
}
