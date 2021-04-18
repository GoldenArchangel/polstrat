export const errorState = {
  authentication: {
    status: false,
    server: false,
    options: {
      username: false,
      password: false,
      confirmed: false,
      blocked: false,
      attempts: 0,
    },
  },
  user: {
    expired: false,
    get: false,
  },
  community: {
    get: false,
  },
}

export const error = (state = errorState, action) => {
  switch (action.type) {
    case "SET_AUTH_ERROR":
      return {
        ...state,
        authentication: action.payload,
      }

    case "SET_SERVER_AUTH_ERROR":
      return {
        ...state,
        authentication: {
          ...state.authentication,
          server: true,
        },
      }

    case "GET_USER_ERROR":
      return {
        ...state,
        user: {
          ...state.user,
          get: true,
        },
      }

    case "GET_COMMUNITY_ERROR":
      return {
        ...state,
        community: {
          ...state.user,
          get: true,
        },
      }

    case "SET_TOKEN_EXPIRED":
      return {
        ...state,
        user: {
          ...state.user,
          expired: action.payload,
        },
      }

    case "RESET_ERROR":
      return errorState

    default:
      return state
  }
}
