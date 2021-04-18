import Request from "../../request"
import { setResetError, setAuthError, setServerAuthError } from "./error"
import { setCurrentUser } from "./user"
import { setMessageOverlay } from "./overlay"
import { setUserConnect } from "./socket"
import {
  SET_AUTHENTICATED,
  UNSET_AUTHENTICATED,
  UNSET_CURRENT_USER,
  SET_LOADING,
  UNSET_LOADING,
  USER_DISCONNECT,
} from "../types"

// CHECK AUTHENTICATION ////////////////////////////////

export const setAuthenticated = (ready, id, alias) => {
  return async dispatch => {
    try {
      if (ready) {
        await dispatch({ type: SET_AUTHENTICATED })
        await dispatch(setUserConnect(id, alias))
      } else {
        await dispatch({ type: UNSET_AUTHENTICATED })
      }
    } catch (error) {}
  }
}

export const checkCurrentUser = () => {
  return async (dispatch, getState) => {
    try {
      const {
        user: {
          current: { ready, _id, alias },
        },
      } = await getState()
      await dispatch(setAuthenticated(ready, _id, alias))
    } catch (error) {}
  }
}

export const checkAuthentication = () => {
  return async (dispatch, getState) => {
    try {
      await dispatch(setCurrentUser())
      await dispatch(checkCurrentUser())
    } catch (error) {}
  }
}

// LOGIN

export const authentication = data => {
  return async dispatch => {
    try {
      const request = new Request()
      const res = await request.post({ url: "/auth/login", data })

      // lets see what the error status
      if (res && res.data && res.data.status) {
        await dispatch(setAuthError(res.data))
        return false
      } else {
        await dispatch(checkAuthentication())
        await dispatch(setResetError())
        await dispatch(
          setMessageOverlay({
            type: "message",
            severity: "success",
            summary: "You are logged.",
            detail: "You are being redirected to the dashboard.",
            life: 2000,
          })
        )
        return true
      }
    } catch (error) {
      await dispatch(setServerAuthError())
      return false
    }
  }
}

// DEAUTHENTICATION /////////////////////////////////////

/*
export const unsetAuthentication = () => {
  return async dispatch => {
    try {
      await dispatch({ type: UNSET_AUTHENTICATED })
      await dispatch(setLoading(false))
    } catch (error) {}
  }
}
*/

// LOGOUT

export const deauthenticate = (message = true) => {
  return async dispatch => {
    try {
      await dispatch({ type: SET_LOADING })

      const request = new Request()
      await request.post({
        url: "/auth/logout",
        data: { token: localStorage.refresh },
      })

      await dispatch({ type: UNSET_AUTHENTICATED })
      await dispatch({ type: UNSET_CURRENT_USER })
      localStorage.removeItem("access")
      localStorage.removeItem("refresh")
      await dispatch({ type: UNSET_LOADING })

      if (message) {
        await dispatch(
          setMessageOverlay({
            type: "message",
            severity: "success",
            summary: "Logout Successful",
            detail: "You logged out from your account successfully.",
            life: 4000,
          })
        )
      }

      await dispatch({
        type: "SOCKET",
        types: [USER_DISCONNECT],
        promise: socket => socket.disconnect(),
      })
    } catch (error) {}
  }
}
