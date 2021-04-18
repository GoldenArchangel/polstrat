import axios from "axios"
import { API_URL, PROXY_PROTOCOL, PROXY_HOST, PROXY_PORT } from "../config"

// axios configs
axios.defaults.timeout = 5000
axios.defaults.maxRedirects = 5
axios.defaults.maxContentLength = 2000
axios.defaults.maxBodyLength = 2000

axios.defaults.proxy = {
  protocol: PROXY_PROTOCOL,
  host: PROXY_HOST,
  port: PROXY_PORT,
}

axios.defaults.baseURL =
  API_URL || `${PROXY_PROTOCOL}://${PROXY_HOST}:${PROXY_PORT}`
