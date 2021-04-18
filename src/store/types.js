// APP ACTIONS
export const INIT_APP = "INIT_APP"
export const API_CALL = "API_CALL"

export const SET_HEALTH_CHECK = "SET_HEALTH_CHECK"
export const UNSET_HEALTH_CHECK = "UNSET_HEALTH_CHECK"

export const SET_LOADING = "SET_LOADING"
export const UNSET_LOADING = "UNSET_LOADING"

export const SET_AUTHENTICATED = "SET_AUTHENTICATED"
export const UNSET_AUTHENTICATED = "UNSET_AUTHENTICATED"

export const SET_CONFIRMED_EMAIL = "SET_CONFIRMED_EMAIL"

export const SET_AUTOLOAD_DATA = "SET_AUTOLOAD_DATA"
export const ADD_TO_AUTOLOAD = "ADD_TO_AUTOLOAD"
export const REFRESH_AUTOLOAD = "REFRESH_AUTOLOAD"
export const UNSET_AUTOLOAD = "UNSET_AUTOLOAD"

// API
export const SET_REQUEST = "SET_REQUEST"
export const SET_REFRESH_FAIL = "SET_REFRESH_FAIL"

// OVERLAY

export const MESSAGE_OVERLAY = "MESSAGE_OVERLAY"
export const RESET_OVERLAY = "RESET_OVERLAY"

// COMPONENTS
export const SET_SORT_FILTERS = "SET_SORT_FILTERS"

// USER ACTION
export const SET_CURRENT_USER = "SET_CURRENT_USER"
export const UNSET_CURRENT_USER = "UNSET_CURRENT_USER"

export const GET_USER = "GET_USER"
export const GET_USER_ERROR = "GET_USER_ERROR"

export const SET_CONNECTION_STATUS = "SET_CONNECTION_STATUS"

export const UNSET_FETCHED_USER = "UNSET_FETCHED_USER"

export const SET_CONNECTION_NOTIFICATIONS = "SET_CONNECTION_NOTIFICATIONS"
export const SET_CONNECTION_NOTIFICATIONS_NEW =
  "SET_CONNECTION_NOTIFICATIONS_NEW"
export const COUNT_MY_CONNECTIONS = "COUNT_MY_CONNECTIONS"
export const COUNT_REQUESTS = "COUNT_REQUESTS"

// COMMUNITY ACTIONS

export const GET_COMMUNITY = "GET_COMMUNITY"
export const GET_COMMUNITY_ERROR = "GET_COMMUNITY_ERROR"

// SOCKETS

export const CONNECT = "CONNECT"
export const USER_CONNECT = "USER_CONNECT"
export const USER_DISCONNECT = "USER_DISCONNECT"
export const FRIEND_REQUEST = "FRIEND_REQUEST"
