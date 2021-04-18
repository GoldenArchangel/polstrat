import { SET_REQUEST } from "../types"

export const apiState = {}

export const api = (state = apiState, action) => {
  switch (action.type) {
    case SET_REQUEST:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}
