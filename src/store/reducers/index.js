import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import { app } from "./app"
import { api } from "./api"
import { socket } from "./socket"
import { overlay } from "./overlay"
import { error } from "./error"
import { user } from "./user"
import { community } from "./community"

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    app,
    api,
    socket,
    overlay,
    error,
    user,
    community,
  })

export default createRootReducer
