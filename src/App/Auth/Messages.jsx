import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import MessagesPage from "../../pages/hub/messages/MessagesPage"

const Messages = () => {
  return (
    <Switch>
      <Route path="/hub/messages" exact component={MessagesPage} />
      <Redirect to="/not-found" />
    </Switch>
  )
}

export default Messages
