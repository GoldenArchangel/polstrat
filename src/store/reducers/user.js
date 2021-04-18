import {
  GET_USER,
  GET_USER_ERROR,
  SET_CURRENT_USER,
  UNSET_CURRENT_USER,
  SET_CONNECTION_STATUS,
  UNSET_FETCHED_USER,
  SET_CONNECTION_NOTIFICATIONS,
  SET_CONNECTION_NOTIFICATIONS_NEW,
  COUNT_MY_CONNECTIONS,
  COUNT_REQUESTS,
} from "../types"

export const userState = {
  current: {
    ready: false,
  },
  fetched: {
    status: null,
    error: false,
  },
  connection: {
    count: null,
    requestsCount: null,
    notifications: null,
    newNotifications: null,
  },
}

export const user = (state = userState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        current: {
          ...action.payload,
          ready: true,
        },
      }

    case UNSET_CURRENT_USER:
      return userState

    case GET_USER:
      return {
        ...state,
        fetched: action.payload,
      }

    case GET_USER_ERROR:
      return {
        ...state,
        fetched: {
          ...state.fetched,
          error: true,
        },
      }

    case SET_CONNECTION_STATUS:
      return {
        ...state,
        fetched: {
          ...state.fetched,
          status: action.payload,
        },
      }

    case SET_CONNECTION_NOTIFICATIONS:
      return {
        ...state,
        connection: {
          ...state.connection,
          notifications: action.payload,
        },
      }

    case SET_CONNECTION_NOTIFICATIONS_NEW:
      return {
        ...state,
        connection: {
          ...state.connection,
          newNotifications: action.payload,
        },
      }

    case COUNT_REQUESTS:
      return {
        ...state,
        connection: {
          ...state.connection,
          requestsCount: action.payload,
        },
      }

    case COUNT_MY_CONNECTIONS:
      return {
        ...state,
        connection: {
          ...state.connection,
          count: action.payload,
        },
      }

    case UNSET_FETCHED_USER:
      return {
        ...state,
        fetched: userState.fetched,
      }

    default:
      return state
  }
}
