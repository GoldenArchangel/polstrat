import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import MyProfilePage from "../../pages/hub/profile/MyProfilePage"
import SettingsPage from "../../pages/hub/profile/SettingsPage"
import EditPage from "../../pages/hub/profile/EditPage"

const Profile = () => {
  return (
    <Switch>
      <Route path="/hub/profile" exact component={MyProfilePage} />
      <Route path="/hub/profile/settings" component={SettingsPage} />
      <Route path="/hub/profile/edit" component={EditPage} />
      <Redirect to="/not-found" />
    </Switch>
  )
}

export default Profile
