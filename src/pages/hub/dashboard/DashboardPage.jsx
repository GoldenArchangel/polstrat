import React, { useEffect, useState } from "react"
import DashboardWrapper from "./DashboardWrapper"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Request from "../../../request"
import { connectionNotifications } from "../../../store/actions/userConnections"
import TextSearch from "../../../components/TextSearchComponent/TextSearchComponent"
import HubContainer from "../../../components/containers/HubContainer/HubContainer"
import { Card } from "primereact/card"
import moment from "moment"

const DashboardPage = props => {
  const dispatch = useDispatch()
  const [users, setUsers] = useState(null)
  const [communities, setCommunities] = useState(null)

  const {
    user: {
      current,
      connection: { notifications },
    },
  } = useSelector(state => state)

  useEffect(() => dispatch(connectionNotifications()), [dispatch])

  useEffect(() => {
    const request = new Request()
    const getUsers = async () => {
      const usersResponse = await request.get({ url: "/user/all" })
      setUsers(usersResponse && usersResponse.data)
    }

    const getCommunities = async () => {
      const communitiesResponse = await request.get({ url: "/community/all" })
      setCommunities(communitiesResponse && communitiesResponse.data)
    }

    getUsers()
    getCommunities()
  }, [])

  const formattedTime = time => moment(time, "YYYYMMDD").fromNow()

  return (
    <HubContainer title="Dashboard" subTitle="My Dashboard">
      <DashboardWrapper>
        {current && notifications ? (
          <div className="dashboard-body">
            <div className="left">
              {users && users.length ? (
                <div>
                  USERS:
                  {users.map((u, i) => {
                    return (
                      <div key={i}>
                        <Link
                          key={i}
                          to={
                            u.alias === current.alias
                              ? `/hub/profile`
                              : `/user/${u.alias}`
                          }
                        >
                          {u.displayName}
                        </Link>
                        <br />
                      </div>
                    )
                  })}
                </div>
              ) : (
                "Loading..."
              )}

              <br />
              <br />

              {communities && communities.length ? (
                <div>
                  Communities:
                  {communities.map((u, i) => {
                    return (
                      <div key={i}>
                        <Link key={i} to={`/community/${u.alias}`}>
                          {u.displayName}
                        </Link>
                        <br />
                      </div>
                    )
                  })}
                </div>
              ) : (
                "Loading..."
              )}
            </div>
            <div className="right">
              <TextSearch {...{ props }} />
              <div>
                <h3>Notifications:</h3>
                <div>
                  {/*JSON.stringify(notifications)*/}
                  {notifications.length ? (
                    notifications.map((n, i) => {
                      return (
                        <div key={i}>
                          {n.subject === "request" ? (
                            <Card>
                              <small style={{ fontSize: "14px" }}>
                                {n.UserConnection &&
                                  n.UserConnection.requester.displayName}{" "}
                                sent you a friend request.{" "}
                                {formattedTime(new Date(n.date))}
                              </small>
                            </Card>
                          ) : null}
                          <br />
                        </div>
                      )
                    })
                  ) : (
                    <Card>You don't have notifications.</Card>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          "Loading..."
        )}
      </DashboardWrapper>
    </HubContainer>
  )
}

export default DashboardPage
