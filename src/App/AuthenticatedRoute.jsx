import React from "react"
import { Route } from "react-router-dom"
import { useSelector } from "react-redux"
import HomePage from "../pages/home/HomePage"

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  const { authenticated } = useSelector(state => state.app)

  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? (
          <Component {...{ ...props }} />
        ) : (
          <HomePage {...{ ...props }} />
        )
      }
    />
  )
}

export default AuthenticatedRoute
