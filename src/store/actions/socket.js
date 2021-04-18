import { USER_CONNECT, MESSAGE_OVERLAY, REFRESH_AUTOLOAD } from "../types"

import {
  getConnectionState,
  updateConnections,
  updateRequests,
  connectionNotifications,
  connectionNotificationsNew,
} from "./userConnections"

export const friendRequest = data => {
  return async dispatch => {
    console.log(data)
    await dispatch(getConnectionState(data.id, true))
    await dispatch(updateConnections())
    await dispatch(updateRequests())
    await dispatch(connectionNotifications())
    await dispatch(connectionNotificationsNew())
    await dispatch({ type: REFRESH_AUTOLOAD, payload: "requests" })
    await dispatch({
      type: MESSAGE_OVERLAY,
      payload: {
        type: "message",
        severity: "info",
        summary: `Friend Request`,
        detail: `You received a friend request from ${data.name}.`,
        life: 7000,
      },
    })
  }
}

export const updateConnectionsState = id => {
  return async dispatch => {
    await dispatch(getConnectionState(id, true))
    await dispatch(updateConnections())
    await dispatch(updateRequests())
    await dispatch(connectionNotifications())
    await dispatch(connectionNotificationsNew())
  }
}

export const setUserConnect = (id, alias) => {
  return async dispatch => {
    try {
      await dispatch({
        type: "SOCKET",
        types: [USER_CONNECT],
        promise: socket => {
          socket.emit(USER_CONNECT, id)
          socket.emit(id, alias)
        },
      })
    } catch (error) {}
  }
}
