import thunk from "redux-thunk"
import { applyMiddleware, compose, createStore } from "redux"
import { routerMiddleware } from "connected-react-router"

import history from "../utils/history"
import createRootReducer from "./reducers"
import { appState } from "./reducers/app"
import { apiState } from "./reducers/api"
import { socketState } from "./reducers/socket"
import { overlayState } from "./reducers/overlay"
import { errorState } from "./reducers/error"
import { userState } from "./reducers/user"
import { communityState } from "./reducers/community"
import { initialize, api, socket } from "../middlewares"
import App from "../classes/app"
import Api from "../classes/api"
import SocketClient from "../classes/socket"

const appClass = new App()
const apiClass = new Api()
const socketClientClass = new SocketClient()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const configureStore = preloadedState =>
  createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        thunk,
        initialize(appClass),
        api(apiClass),
        socket(socketClientClass)
      )
    )
  )

const initialState = {
  api: apiState,
  app: appState,
  socket: socketState,
  overlay: overlayState,
  error: errorState,
  user: userState,
  community: communityState,
}

const store = configureStore(initialState)

export default store
