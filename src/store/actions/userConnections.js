import Request from "../../request"
import {
  SET_CONNECTION_STATUS,
  SET_CONNECTION_NOTIFICATIONS,
  SET_CONNECTION_NOTIFICATIONS_NEW,
  COUNT_MY_CONNECTIONS,
  COUNT_REQUESTS,
  SET_AUTOLOAD_DATA,
  UNSET_AUTOLOAD,
  REFRESH_AUTOLOAD,
} from "../types"
import { setMessageOverlay } from "./overlay"

// CONECTIONS //////////////////////

// GET CONNECTIONS

export const updateConnections = () => {
  return async dispatch => {
    await dispatch(getAllConnections())
    await dispatch(countAllConnections())
  }
}

export const updateRequests = () => {
  return async dispatch => {
    await dispatch(countAllRequests())
    await dispatch(getAllRequests())
  }
}

export const getAllConnections = (limit = 4, page = 1, sort = "desc") => {
  return async dispatch => {
    try {
      const request = new Request()
      let url = "/user/connection/my?"

      url += `&limit=${limit}`

      if (page) {
        url += `&page=${page}`
      }

      if (sort) {
        url += `&sort=${sort}`
      }

      const connections = await request.get({ url })

      await dispatch({
        type: SET_AUTOLOAD_DATA,
        payload: connections.data,
      })

      /*
      await dispatch({
        type: SET_MY_CONNECTIONS,
        payload: connections.data,
      })
      */

      //await dispatch(countAllConnections())
      //await dispatch(getAllRequests())
    } catch (error) {}
  }
}

export const countAllConnections = () => {
  return async dispatch => {
    try {
      const request = new Request()
      const connections = await request.get({
        url: "/user/connection/my/count",
      })

      await dispatch({
        type: COUNT_MY_CONNECTIONS,
        payload: connections.data,
      })
    } catch (error) {}
  }
}

// GET MY REQUESTS (TO THE USER)

export const countAllRequests = () => {
  return async dispatch => {
    try {
      const request = new Request()
      const connections = await request.get({
        url: "/user/connection/requests/count",
      })

      await dispatch({
        type: COUNT_REQUESTS,
        payload: connections.data,
      })
    } catch (error) {}
  }
}

export const getAllRequests = (limit = 3, page = false, sort = "asc") => {
  return async dispatch => {
    try {
      const request = new Request()
      let url = `/user/connection/requests?`

      url += `&limit=${limit}`

      if (page) {
        url += `&page=${page}`
      }

      if (sort) {
        url += `&updatedAt=${sort}`
      }

      const connections = await request.get({ url })

      await dispatch({
        type: SET_AUTOLOAD_DATA,
        payload: connections.data,
      })
    } catch (error) {}
  }
}

export const getAllPendings = () => {
  return async dispatch => {
    try {
      const request = new Request()

      // Requests made to the user
      const userRequests = await request.get({
        url: `/user/connection/requests`,
      })

      // Requests made form the user to another
      const userPending = await request.get({
        url: `/user/connection/pending`,
      })

      if (userRequests && userPending) {
        //await dispatch(setAllRequests({ userRequests, userPending }))
      }
    } catch (error) {}
  }
}

// SET CONNECTION STATUS

export const setConnectionState = (connection, senderId) => {
  return async (dispatch, getState) => {
    try {
      const {
        user: { fetched },
      } = getState()

      // recipient -> me
      // requester -> other user

      // 0 = no connection
      // 1 = requested you
      // 2 = you requested
      // 3 = friends
      // 4 = you blocked
      // 5 = blocked you

      const { recipient, requester } = connection
      let response

      if (!recipient && !requester) {
        response = 0
      } else {
        if (recipient.status === 1 && requester.status === 0) {
          response = 1
        } else if (recipient.status === 0 && requester.status === 1) {
          response = 2
        } else if (recipient.status === 2 && requester.status === 2) {
          response = 3
        } else if (requester.status === 3 && recipient.status === 0) {
          response = 4
        } else if (recipient.status === 3 && requester.status === 0) {
          response = 5
        }
      }

      // if its not from socket just set the state
      if (!senderId) {
        await dispatch({
          type: SET_CONNECTION_STATUS,
          payload: response,
        })
      }

      // if its coming from socket compare with sender id
      if (fetched._id === senderId) {
        await dispatch({
          type: SET_CONNECTION_STATUS,
          payload: response,
        })
      }
    } catch (e) {}
  }
}

// GET CONNECTION STATE

export const getConnectionState = (id, socket = false) => {
  return async dispatch => {
    try {
      const request = new Request()
      const res = await request.get({
        url: `/user/connection/get/${id}`,
      })

      if (res && res.data) {
        await dispatch(setConnectionState(res.data, socket ? id : false))
      }
    } catch (error) {}
  }
}

// GET CONNECTION NOTIFICATIONS

export const connectionNotifications = () => {
  return async dispatch => {
    try {
      const request = new Request()

      const notifications = await request.get({
        url: `/user/connection/notifications`,
      })

      if (notifications) {
        await dispatch({
          type: SET_CONNECTION_NOTIFICATIONS,
          payload: notifications.data,
        })
      }
    } catch (error) {}
  }
}

export const connectionNotificationsNew = () => {
  return async dispatch => {
    try {
      const request = new Request()

      const notifications = await request.get({
        url: `/user/connection/notifications/new`,
      })

      await dispatch({
        type: SET_CONNECTION_NOTIFICATIONS_NEW,
        payload: notifications.data,
      })
    } catch (error) {}
  }
}

export const setConnectionNotificationsSeen = id => {
  return async dispatch => {
    try {
      const request = new Request()

      await request.get({
        url: `/user/connection/notifications/seen/${id}`,
      })

      await dispatch(connectionNotifications())
      await dispatch(connectionNotificationsNew())
    } catch (error) {}
  }
}

// REQUEST

export const requestUser = (id, displayName) => {
  return async dispatch => {
    try {
      const request = new Request()

      await request.post({
        url: `/user/connection/request/${id}`,
      })

      await dispatch(getConnectionState(id))
      await dispatch(updateRequests())
      await dispatch(
        setMessageOverlay({
          type: "message",
          severity: "info",
          summary: "Request processed",
          detail: `You made a friend request to ${displayName}.`,
          life: 5000,
        })
      )
    } catch (error) {
      await dispatch(
        setMessageOverlay({
          type: "message",
          severity: "error",
          summary: "Request not processed",
          detail: `Sorry, something went wrong.`,
          life: 5000,
        })
      )
    }
  }
}

export const approveConnection = (id, displayName) => {
  return async dispatch => {
    try {
      const request = new Request()

      await request.put({
        url: `/user/connection/approve/${id}`,
      })

      await dispatch(updateRequests())
      await dispatch(getConnectionState(id))
      await dispatch(updateConnections())

      await dispatch(
        setMessageOverlay({
          type: "message",
          severity: "success",
          summary: "Request approved",
          detail: `You are now friend with ${displayName}.`,
          life: 5000,
        })
      )
    } catch (error) {
      await dispatch(
        setMessageOverlay({
          type: "message",
          severity: "error",
          summary: "Request not processed",
          detail: `Sorry, something went wrong.`,
          life: 5000,
        })
      )
    }
  }
}

export const removeConnection = (id, displayName) => {
  return async dispatch => {
    try {
      const request = new Request()

      const req = await request.delete({
        url: `/user/connection/reject/${id}`,
      })

      await dispatch({
        type: REFRESH_AUTOLOAD,
        payload: {
          type: "remove",
          id: req.data._id,
        },
      })
      await dispatch(updateRequests())
      await dispatch(getConnectionState(id))
      await dispatch(updateConnections())

      await dispatch(
        setMessageOverlay({
          type: "message",
          severity: "info",
          summary: "Removed Successfully",
          detail: `${displayName} was successfully removed.`,
          life: 5000,
        })
      )
    } catch (error) {
      await dispatch(
        setMessageOverlay({
          type: "message",
          severity: "error",
          summary: "Request not processed",
          detail: `Sorry, something went wrong.`,
          life: 5000,
        })
      )
    }
  }
}

// UNSET FETCHED USER AND CONNECTION/////////////////
