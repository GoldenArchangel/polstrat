import React, { useEffect, useRef } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { ConnectedRouter } from "connected-react-router"
import { useDispatch, useSelector } from "react-redux"
import history from "../utils/history"
import AthenticatedRoute from "./AuthenticatedRoute"
import SimpleRoute from "./SimpleRoute"
import Auth from "./Auth/Auth"
import {
  OverlayComponent,
  overlayAppDisplay,
} from "../components/elements/OverlayComponent"
import HomePage from "../pages/home/HomePage"
import RegisterPage from "../pages/register/RegisterPage"
import ResetPasswordPage from "../pages/reset/ResetPasswordPage"
import ConfirmEmailPage from "../pages/confirm/ConfirmEmailPage"
import ConfirmResponsePage from "../pages/confirm/ConfirmResponsePage"
import TermsOfServicePage from "../pages/tos/TermsOfServicePage"
import NotFoundPage from "../pages/404/NotFoundPage"
import ServerErrorPage from "../pages/500/ServerErrorPage"
import SpinnerComponent from "../components/elements/SpinnerComponent"

import store from "../store"
import { INIT_APP } from "../store/types"
store.dispatch({ type: INIT_APP })

const App = () => {
  const dispatch = useDispatch()
  const {
    app: { healthCheck, loading },
    overlay,
  } = useSelector(state => state)

  const overlayRef = useRef(null)

  // set message overlays
  useEffect(() => overlayAppDisplay(overlayRef, overlay, dispatch), [
    overlayRef,
    overlay,
    dispatch,
  ])

  return (
    <ConnectedRouter history={history}>
      <BrowserRouter>
        {!healthCheck ? (
          <Route component={ServerErrorPage} />
        ) : (
          <Switch>
            <SimpleRoute path="/" exact component={HomePage} />
            <SimpleRoute path="/register" exact component={RegisterPage} />
            <SimpleRoute
              path="/confirm-email"
              exact
              component={ConfirmEmailPage}
            />
            <SimpleRoute
              path="/confirm-email/:token"
              component={ConfirmResponsePage}
            />
            <SimpleRoute path="/reset" exact component={ResetPasswordPage} />
            <Route path="/tos" exact component={TermsOfServicePage} />
            <Route path="/not-found" exact component={NotFoundPage} />
            <AthenticatedRoute component={Auth} />
            <Route component={NotFoundPage} />
          </Switch>
        )}
      </BrowserRouter>
      <OverlayComponent {...{ overlayRef, overlay }} />
      <SpinnerComponent type="page" show={loading} />
    </ConnectedRouter>
  )
}

export default App
