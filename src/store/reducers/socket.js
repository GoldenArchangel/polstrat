import { CONNECT } from "../types"

export const socketState = {
  connected: false,
}

export const socket = (state = socketState, action = {}) => {
  switch (action.type) {
    case CONNECT: {
      return {
        ...state,
        connected: true,
      }
    }

    default: {
      return state
    }
  }
}
