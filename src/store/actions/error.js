export const setResetError = () => {
  return { type: "RESET_ERROR" }
}

// AUTH

export const setAuthError = error => {
  return async dispatch =>
    await dispatch({
      type: "SET_AUTH_ERROR",
      payload: error,
    })
}

export const setServerAuthError = () => {
  return async dispatch => await dispatch({ type: "SET_SERVER_AUTH_ERROR" })
}

// USER

export const setGetUserError = () => {
  return async dispatch => await dispatch({ type: "GET_USER_ERROR" })
}

// COMMUNITY

export const setGetCommunityError = () => {
  return async dispatch => await dispatch({ type: "GET_COMMUNITY_ERROR" })
}
