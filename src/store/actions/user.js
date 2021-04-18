import Request from "../../request"
import {
  SET_CURRENT_USER,
  UNSET_CURRENT_USER,
  GET_USER,
  GET_USER_ERROR,
  UNSET_FETCHED_USER,
} from "../types"
import { getConnectionState } from "./userConnections"

// SET USER /////////////////////////////

export const setCurrentUser = () => {
  return async dispatch => {
    try {
      const request = new Request()
      const res = await request.get({ url: "/user/current" })

      console.log("GET CURRENT USER")
      console.log(res)

      await dispatch({
        type: SET_CURRENT_USER,
        payload: res && res.data,
      })
    } catch (error) {}
  }
}

export const unsetCurrentUser = () => {
  return async dispatch => {
    try {
      await dispatch({
        type: UNSET_CURRENT_USER,
      })
    } catch (error) {}
  }
}

// GET USER BY ALIAS /////////////////////////////

export const dispatchGetUser = data => {
  return async dispatch => {
    try {
      await dispatch({ type: GET_USER, payload: data })
      await dispatch(getConnectionState(data._id))
    } catch (error) {}
  }
}

export const getUserError = () => {
  return async dispatch => {
    try {
      await dispatch({ type: GET_USER_ERROR })
    } catch (error) {}
  }
}

export const getUser = alias => {
  return async dispatch => {
    try {
      const request = new Request()
      const res = await request.get({ url: `/user/${alias}` })

      if (!res || !res.data) {
        await dispatch(getUserError())
      }

      await dispatch(dispatchGetUser(res.data))
    } catch (error) {
      await dispatch(getUserError())
    }
  }
}

// CREATE /////////////////////////////

export const create = user => {
  return async dispatch => {
    try {
      const request = new Request()
      const res = await request.post({ url: "/user/create", data: user })

      if (res && res.status === 200) {
        return res
      } else {
        return false
      }
    } catch (error) {
      return false
    }
  }
}

// UNSET FETCHED USER AND CONNECTION/////////////////

export const unsetFetchedUser = data => {
  return async dispatch => {
    try {
      await dispatch({ type: UNSET_FETCHED_USER })
    } catch (error) {}
  }
}
