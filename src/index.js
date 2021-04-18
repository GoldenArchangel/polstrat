import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"
import store from "../src/store"

import App from "./App/App"
import "./utils/axios"

//TODO: import css in styled-components

import "./styles/reset.css"

import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"

import "./styles/variables.css"
import "./styles/theme/fonts.css"
import "./styles/theme/text.css"
import "./styles/theme/elevation.css"
import "./styles/theme/theme.css"
import "./styles/global.css"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

serviceWorkerRegistration.register()
