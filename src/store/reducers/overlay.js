import { MESSAGE_OVERLAY, RESET_OVERLAY } from "../types"

export const overlayState = {
  message: {
    messageActive: false,
    severity: "",
    summary: "",
    detail: "",
    life: 0,
    position: "",
  },
}

export const overlay = (state = overlayState, action) => {
  switch (action.type) {
    case MESSAGE_OVERLAY:
      return {
        ...state,
        message: {
          messageActive: true,
          ...action.payload,
        },
      }

    case RESET_OVERLAY:
      return overlayState

    default:
      return state
  }
}
