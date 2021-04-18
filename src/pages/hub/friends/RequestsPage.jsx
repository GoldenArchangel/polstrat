import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  getAllRequests,
  approveConnection,
  removeConnection,
  connectionNotifications,
  setConnectionNotificationsSeen,
  countAllRequests,
} from "../../../store/actions/userConnections"
import { Button } from "primereact/button"
import { Card } from "primereact/card"
import { Link } from "react-router-dom"
import { confirmDialog } from "primereact/confirmdialog"
import SpinnerComponent from "../../../components/elements/SpinnerComponent"
import moment from "moment"
import { TabView, TabPanel } from "primereact/tabview"
import { RequestsCardComponent } from "../../../components/ConnectionCardComponent/RequestsCardComponent"
import AutoLoaderComponent from "../../../components/AutoLoaderComponent/AutoLoaderComponent"
import { FriendsContainerWrapper } from "./FriendsWrapper"

const RequestsPage = props => {
  const dispatch = useDispatch()
  const [requestsLoading, setRequestsLoading] = useState(null)
  const [pendingLoading, setPendingLoading] = useState(null)

  const {
    connection: { requests, requestsCount, pending, notifications },
  } = useSelector(state => state.user)

  useEffect(() => dispatch(countAllRequests()), [dispatch])

  useEffect(() => dispatch(connectionNotifications()), [dispatch])

  const pendingCard = (pending, recipient, i) => {
    return (
      <Card
        style={{ marginBottom: "15px" }}
        key={i}
        title={
          <Link to={`/user/${recipient.alias}`}>{recipient.displayName}</Link>
        }
        subTitle="Request sent"
      >
        <div>Since: {moment(recipient.createdAt, "YYYYMMDD").fromNow()}</div>
        <span>Wait for user to accept or reject your request. </span>
        <Button
          label="Cancel"
          className="p-button-outlined p-button-sm"
          icon="pi pi-times"
          onClick={() =>
            confirmDialog({
              message: `Are you sure you want to cancel ${recipient.displayName} request?`,
              header: "Cancel Friend Request",
              acceptClassName: "p-button-danger",
              accept: () => {
                setPendingLoading(pending.length)
                dispatch(removeConnection(recipient._id, recipient.displayName))
              },
            })
          }
        />
      </Card>
    )
  }

  return (
    <FriendsContainerWrapper>
      <div className="friends-container">
        <>
          <div className="friends-header">
            <div className="description">
              {typeof requestsCount === "number" && (
                <i className="pi pi-info-circle"></i>
              )}

              {typeof requestsCount === "number" ? (
                requestsCount ? (
                  `You have ${requestsCount} request${
                    requestsCount > 1 ? "s" : ""
                  }`
                ) : (
                  "You have 0 Requests"
                )
              ) : (
                <SpinnerComponent type="small" />
              )}
            </div>

            {notifications &&
            notifications.filter(n => n.state === 1).length ? (
              <span className="primary">
                {notifications.filter(n => n.state === 1).length} new requests
              </span>
            ) : (
              <span className="secondary">Dont have any new request</span>
            )}
          </div>

          <div className="friends-body">
            <AutoLoaderComponent
              name="requests"
              data={requests}
              count={requestsCount}
              limit={6}
              action={getAllRequests}
              Component={RequestsCardComponent}
              args={{
                props,
                options: {
                  notifications,
                  dispatch,
                  setConnectionNotificationsSeen,
                  setRequestsLoading,
                  approveConnection,
                  confirmDialog,
                  removeConnection,
                },
              }}
              noResultsText="Don't have any requests to show."
              searchText="Find new friends and invite
            them to join you."
            />
          </div>
        </>
      </div>
    </FriendsContainerWrapper>
  )

  /*
  return Array.isArray(requests) ? (
    <RequestsPageWrapper>
      <TabView>
        <TabPanel header="Received">
          <AutoLoaderComponent
            data={requests}
            count={requestsCount}
            limit={6}
            action={getAllRequests}
            Component={RequestsCardComponent}
            args={{
              props,
              options: {
                notifications,
                dispatch,
                setConnectionNotificationsSeen,
                setRequestsLoading,
                approveConnection,
                confirmDialog,
                removeConnection,
              },
            }}
            noResultsText="Don't have any requests to show."
            searchText="Find new friends and invite
            them to join you."
          />
        </TabPanel>

        <TabPanel header="Sent">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
            velit, sed quia non numquam eius modi.
          </p>
        </TabPanel>
      </TabView>
    </RequestsPageWrapper>
  ) : (
    <SpinnerComponent type="medium" />
  )
  */
}

export default RequestsPage
