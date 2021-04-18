import store from "./store"
import { API_CALL } from "./store/types"

export default class Request {
  async get(options) {
    try {
      options.method = "get"
      await this.setRequest(options)
      return await this.getResponse()
    } catch (e) {}
  }

  async post(options) {
    try {
      options.method = "post"
      await this.setRequest(options)
      return await this.getResponse()
    } catch (e) {}
  }

  async put(options) {
    try {
      options.method = "put"
      await this.setRequest(options)
      return await this.getResponse()
    } catch (e) {}
  }

  async delete(options) {
    try {
      options.method = "delete"
      await this.setRequest(options)
      return await this.getResponse()
    } catch (e) {}
  }

  async setRequest({ method, url, data = false, token = false }) {
    try {
      await store.dispatch({
        type: API_CALL,
        payload: { method, url, data, token },
      })
    } catch (e) {}
  }

  getResponse() {
    const state = store.getState()
    return state.api.response
  }
}
