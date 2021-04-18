import {
  SET_HEALTH_CHECK,
  UNSET_HEALTH_CHECK,
  SET_LOADING,
  UNSET_LOADING,
  SET_AUTHENTICATED,
  UNSET_AUTHENTICATED,
  SET_CONFIRMED_EMAIL,
  SET_SORT_FILTERS,
  SET_AUTOLOAD_DATA,
  UNSET_AUTOLOAD,
  REFRESH_AUTOLOAD,
} from "../types"

export const appState = {
  loading: false,
  healthCheck: true,
  serverError: false,
  authenticated: false,
  emailConfirmed: false,
  sortFilters: null,
  autoLoadData: null,
  autoLoadRefresh: null,
}

export const app = (state = appState, action) => {
  switch (action.type) {
    case SET_HEALTH_CHECK:
      return {
        ...state,
        healthCheck: true,
      }

    case UNSET_HEALTH_CHECK:
      return {
        ...state,
        healthCheck: false,
      }

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }

    case UNSET_LOADING:
      return {
        ...state,
        loading: false,
      }

    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      }

    case SET_SORT_FILTERS:
      return {
        ...state,
        sortFilters: action.payload,
      }

    case SET_AUTOLOAD_DATA:
      return {
        ...state,
        autoLoadData: action.payload,
      }

    case REFRESH_AUTOLOAD:
      return {
        ...state,
        autoLoadRefresh: action.payload,
      }

    case UNSET_AUTOLOAD:
      return {
        ...state,
        autoLoadData: null,
      }

    case UNSET_AUTHENTICATED:
      return appState

    case SET_CONFIRMED_EMAIL:
      return {
        ...state,
        emailConfirmed: true,
      }

    default:
      return state
  }
}
