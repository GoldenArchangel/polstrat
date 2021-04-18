import { GET_COMMUNITY } from "../types"

export const communityState = {
  data: {
    ready: false,
  },
  fetched: {
    count: 0,
    ready: false,
  },
}

export const community = (state = communityState, action) => {
  switch (action.type) {
    case GET_COMMUNITY:
      return {
        ...state,
        fetched: {
          ...action.payload.data,
          count: action.payload.count,
          ready: true,
        },
      }

    default:
      return state
  }
}
