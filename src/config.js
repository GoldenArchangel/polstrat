import dotenv from "dotenv"
dotenv.config()

// API url configs
export const API_URL = process.env.REACT_APP_API_URL || "http://localhost:9000"

export const PROXY_PROTOCOL = process.env.PROXY_PROTOCOL || "http"
export const PROXY_HOST = process.env.PROXY_HOST || "localhost"
export const PROXY_PORT = process.env.PROXY_PORT || 9000

// Geonames API
export const GEONAMES_USERNAME = process.env.REACT_APP_GEONAMES_USERNAME

console.log(API_URL)
