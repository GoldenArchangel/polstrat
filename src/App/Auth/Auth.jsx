import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import HubLayoutComponent from "../../components/layout/HubLayoutComponent"
import Hub from "./Hub"
import UserProfilePage from "../../pages/userProfile/UserProfilePage"
import CommunityProfilePage from "../../pages/communityProfile/CommunityProfilePage"

const Auth = props => {
  return (
    <HubLayoutComponent {...{ props }}>
      <Switch>
        <Route path="/hub" component={Hub} />
        <Route path="/user/:alias" component={UserProfilePage} />
        <Route path="/community/:alias" component={CommunityProfilePage} />
        <Redirect to="/not-found" />
      </Switch>
    </HubLayoutComponent>
  )
}

export default Auth
