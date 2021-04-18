import Request from "../request"
import {
  UNSET_CURRENT_USER,
  UNSET_AUTHENTICATED,
  MESSAGE_OVERLAY,
  CONNECT,
} from "../store/types"

export default class App {
  healthCheck

  userResponse
  currentUserRes

  async setHealthCheck() {
    try {
      const request = new Request()

      this.healthCheck = await request.get({
        url: "/health-check",
      })
    } catch (e) {
      this.healthCheck = false
    }
  }

  async checkAuthentication() {
    try {
      const request = new Request()
      this.currentUserRes = await request.get({
        url: "/user/current",
      })
    } catch (e) {}
  }

  async clearUser(dispatch, message = false) {
    try {
      await dispatch({ type: UNSET_AUTHENTICATED })
      await dispatch({ type: UNSET_CURRENT_USER })
      localStorage.removeItem("access")
      localStorage.removeItem("refresh")

      if (message) {
        dispatch({
          type: MESSAGE_OVERLAY,
          payload: {
            type: "message",
            severity: "warn",
            summary: "Session Expired",
            detail: "Your session has expired, Login again to gain access.",
            life: 4000,
          },
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async socketConnect(dispatch, id = "unknown", name = "Unknown") {
    try {
      await dispatch({
        type: "SOCKET",
        types: [CONNECT],
        promise: socket => socket.connect(id, name),
      })
    } catch (e) {}
  }
}
