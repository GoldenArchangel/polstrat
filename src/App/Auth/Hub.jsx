import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Profile from "./Profile"
import Messages from "./Messages"
import Search from "./Search"
import DashboardPage from "../../pages/hub/dashboard/DashboardPage"
import CommunityPage from "../../pages/hub/community/CommunityPage"
import FriendsPage from "../../pages/hub/friends/FriendsPage"

const Hub = () => {
  return (
    <Switch>
      <Route path="/hub/dashboard" component={DashboardPage} />
      <Route path="/hub/profile" component={Profile} />
      <Route path="/hub/community" component={CommunityPage} />
      <Route path="/hub/friends" component={FriendsPage} />
      <Route path="/hub/messages" component={Messages} />
      <Route path="/hub/search" component={Search} />
      <Redirect exact from="/hub" to="/hub/dashboard" />
      <Redirect to="/not-found" />
    </Switch>
  )
}

export default Hub
