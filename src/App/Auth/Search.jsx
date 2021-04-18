import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import SearchPage from "../../pages/search/SearchPage"
import SearchUsersPage from "../../pages/search/SearchUsersPage"
import SearchCommunitiesPage from "../../pages/search/SearchCommunitiesPage"

const Search = () => {
  return (
    <Switch>
      <Route path="/hub/search" exact component={SearchPage} />
      <Route path="/hub/search/users" component={SearchUsersPage} />
      <Route path="/hub/search/communities" component={SearchCommunitiesPage} />
      <Redirect to="/not-found" />
    </Switch>
  )
}

export default Search
