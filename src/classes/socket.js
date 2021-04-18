import { io } from "socket.io-client"
import { API_URL } from "../config"
import store from "../store"
import { USER_CONNECT } from "../store/types"
import { friendRequest, updateConnectionsState } from "../store/actions/socket"

export default class socketAPI {
  socket

  async connect(id, name) {
    try {
      this.socket = io.connect(API_URL)
      await this.socket.on("connect", () => this.initListeners(id, name))
    } catch (e) {
      await this.socket.on("connect_error", error => error)
    }
  }

  async disconnect() {
    try {
      await this.socket.disconnect(() => {
        this.socket = null
      })
    } catch (e) {}
  }

  async emit(event, data) {
    try {
      if (!this.socket) {
        throw new Error("No socket connection.")
      }

      await this.socket.emit(event, data)
    } catch (e) {}
  }

  on(event, fun) {
    try {
      if (!this.socket) {
        throw new Error("No socket connection.")
      }
    } catch (e) {}

    //async not needed here
    this.socket.on(event, fun)
  }

  // listeners on start
  initListeners(id, name) {
    const { dispatch } = store

    this.socket.emit(USER_CONNECT, id)
    this.socket.emit(id, name)
    this.socket.on("FRIEND_REQUEST", data => dispatch(friendRequest(data)))
    this.socket.on("FRIEND_APPROVED", data =>
      dispatch(updateConnectionsState(data))
    )
    this.socket.on("FRIEND_REJECTED", data =>
      dispatch(updateConnectionsState(data))
    )
    this.socket.on("BLOCKED", data => dispatch(updateConnectionsState(data)))
  }
}
