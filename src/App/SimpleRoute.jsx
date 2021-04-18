import React from "react"
import { Route } from "react-router-dom"
import { useSelector } from "react-redux"
import DashboardPage from "../pages/hub/dashboard/DashboardPage"

const SimpleRoute = ({ component: Component, ...rest }) => {
  const {
    app: { authenticated },
  } = useSelector(state => state)

  return (
    <Route
      {...rest}
      render={props =>
        !authenticated ? (
          <Component {...{ ...props }} />
        ) : (
          <DashboardPage {...{ ...props }} />
        )
      }
    />
  )
}

export default SimpleRoute
