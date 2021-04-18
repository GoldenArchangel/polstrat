import axios from "axios"
import App from "./app"

export default class Api extends App {
  prefix = "/api"
  accessToken
  renewResponse
  response

  async request({ method, url, data, token }) {
    this.accessToken = localStorage.access

    try {
      const prefixedUrl = this.prefix + url
      let requestOptions = data
        ? { method, url: prefixedUrl, data }
        : { method, url: prefixedUrl }

      const request = axios.create()

      request.interceptors.request.use(config => {
        config.headers["Authorization"] = `Bearer ${token || this.accessToken}`
        return config
      })

      return await request(requestOptions)
    } catch (e) {}
  }

  async renewAccess() {
    try {
      this.renewResponse = await this.request({
        method: "post",
        url: "/auth/refresh",
        data: { token: localStorage.refresh },
      })
    } catch (e) {}
  }

  async refreshedResponse(options, token) {
    try {
      return await this.request({
        method: options.method,
        url: options.url,
        data: options.data,
        token: token,
      })
    } catch (e) {}
  }

  setTokens(access, refresh) {
    localStorage.setItem("access", access)

    if (refresh) {
      localStorage.setItem("refresh", refresh)
    }
  }
}
