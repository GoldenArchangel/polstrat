import React, { useEffect } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { countAllConnections } from "../../../store/actions/userConnections"
import HubContainer from "../../../components/containers/HubContainer/HubContainer"
import TabMenuComponent from "../../../components/elements/TabMenuComponent"
import MyFriendsPage from "./MyFriendsPage"
import RequestsPage from "./RequestsPage"
import BlockedPage from "./BlockedPage"
import BadgeComponent from "../../../components/elements/BadgeComponent"

const FriendsPage = props => {
  const dispatch = useDispatch()
  const { pathname } = props.location

  const {
    connection: { newNotifications, count, requestsCount },
  } = useSelector(state => state.user)

  useEffect(() => dispatch(countAllConnections()), [dispatch])

  const location = "/hub/friends"
  const [friends, requests, blocked] = [
    pathname === location,
    pathname === `${location}/requests`,
    pathname === `${location}/blocked`,
  ]

  const subTitle =
    (friends && "My Friends") ||
    (requests && "Requests") ||
    (blocked && "Blocked")

  const items = [
    {
      label: <span>{`Friends${count ? "(" + count + ")" : "(0)"}`}</span>,
      icon: "pi pi-fw pi-users",
      command: () => props.history.push(`${location}`),
    },
    {
      label: (
        <>
          <span>{`Requests${
            requestsCount ? "(" + requestsCount + ")" : "(0)"
          }`}</span>
          {newNotifications ? (
            <BadgeComponent
              value={newNotifications}
              overlay={true}
              top="7px"
              right="4px"
            ></BadgeComponent>
          ) : null}
        </>
      ),
      icon: "pi pi-fw pi-user-plus",
      command: () => props.history.push(`${location}/requests`),
    },
    {
      label: "Blocked",
      icon: "pi pi-fw pi-ban",
      command: () => props.history.push(`${location}/blocked`),
    },
  ]

  const menu = (
    <TabMenuComponent
      items={items}
      initialActiveItem={
        (friends && items[0]) || (requests && items[1]) || (blocked && items[2])
      }
    />
  )

  return (
    <HubContainer title="Friends" subTitle={subTitle} menu={menu}>
      <Switch>
        <Route
          path="/hub/friends"
          exact
          {...{ props }}
          component={MyFriendsPage}
        />
        <Route
          path="/hub/friends/requests"
          {...{ props }}
          exact
          component={RequestsPage}
        />
        <Route
          path="/hub/friends/blocked"
          {...{ props }}
          exact
          component={BlockedPage}
        />
        <Redirect to="/not-found" />
      </Switch>
    </HubContainer>
  )
}

export default FriendsPage
