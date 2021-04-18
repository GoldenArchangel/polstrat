import React, { useState } from "react"
import { Button } from "primereact/button"
import { Link } from "react-router-dom"
import moment from "moment"
import UserProfile from "../../pages/userProfile/UserProfilePage"
import { RequestsCardWrapper } from "./RequestsCardWrapper"
import ProfileDialogComponent from "../elements/ProfileDialogComponent"
import { Tag } from "primereact/tag"

export const RequestsCardComponent = ({ props, options, data }) => {
  const [displayBasic, setDisplayBasic] = useState(false)
  const { requester, createdAt } = data

  if (!requester) {
    return <p>ERROR</p>
  }

  const {
    notifications,
    dispatch,
    setConnectionNotificationsSeen,
    setRequestsLoading,
    approveConnection,
    confirmDialog,
    removeConnection,
  } = options

  const { match, history } = props
  const formattedDate = moment(new Date(createdAt), "YYYYMMDD").fromNow()

  const [notSeenNotification] = notifications
    ? notifications.filter(
        n =>
          n.UserConnection && n.UserConnection.requester._id === requester._id
      )
    : [false]

  return (
    <RequestsCardWrapper
      new={notSeenNotification && notSeenNotification.state === 1}
    >
      <div
        className="requests-container"
        onMouseEnter={() => {
          notSeenNotification &&
            notSeenNotification.state === 1 &&
            dispatch(setConnectionNotificationsSeen(notSeenNotification._id))
        }}
      >
        <ProfileDialogComponent
          header={
            <h2 className="profile-dialog-title share-tech-mono">
              <span className="community">
                {requester.Community ? `[${requester.Community.tag}]` : null}
              </span>
              <span className="primary">{requester.displayName}</span> Profile
            </h2>
          }
          modal={true}
          closeOnEscape
          dismissableMask
          visible={displayBasic}
          onHide={() => setDisplayBasic(false)}
        >
          <UserProfile {...{ match, history, modalAlias: requester.alias }} />
        </ProfileDialogComponent>

        <div className="card-start">
          <div className="card-name">
            <i className="pi pi-user-plus"></i>
            {requester.Community ? (
              <span className="card-tag">
                <Link
                  className="community share-tech-mono"
                  to={`/community/${requester.Community.alias}`}
                >
                  [{requester.Community.tag}]
                </Link>
              </span>
            ) : null}
            <Link className="share-tech-mono" to={`/user/${requester.alias}`}>
              {requester.displayName}
            </Link>
          </div>
          <div className="card-date">
            <span className="title secondary">Requested</span>
            <span className="date secondary">{formattedDate}</span>
            {notSeenNotification && notSeenNotification.state === 1 ? (
              <Tag value="New"></Tag>
            ) : null}
          </div>
        </div>

        <div className="card-end">
          <div className="card-menu">
            <Button
              label="Accept"
              className="p-button-outlined p-button-sm "
              icon="pi pi-check"
              onClick={() =>
                confirmDialog({
                  message: `Are you sure you want to approve ${requester.displayName}?`,
                  header: "Approve Friend",
                  accept: () => {
                    setRequestsLoading(data.length)
                    dispatch(
                      approveConnection(requester._id, requester.displayName)
                    )
                    notSeenNotification &&
                      notSeenNotification.state === 1 &&
                      dispatch(
                        setConnectionNotificationsSeen(notSeenNotification._id)
                      )
                    setRequestsLoading(null)
                  },
                })
              }
            />
            <Button
              label="Reject"
              className="p-button-outlined p-button-sm p-button-danger"
              icon="pi pi-times"
              onClick={() =>
                confirmDialog({
                  message: `Are you sure you want to reject ${requester.displayName} request?`,
                  header: "Reject Friend Request",
                  acceptClassName: "p-button-danger",
                  accept: () => {
                    setRequestsLoading(data.length)
                    dispatch(
                      removeConnection(requester._id, requester.displayName)
                    )
                    notSeenNotification &&
                      notSeenNotification.state === 1 &&
                      dispatch(
                        setConnectionNotificationsSeen(notSeenNotification._id)
                      )
                    setRequestsLoading(null)
                  },
                })
              }
            />

            <Button
              label="Profile"
              className="p-button-outlined p-button-sm p-button-secondary"
              icon="pi pi-id-card"
              onClick={() => setDisplayBasic(true)}
            />

            <Button
              label="Send"
              className="p-button-outlined p-button-sm p-button-info"
              icon="pi pi-send"
            />

            <Button
              className="p-button-outlined p-button-sm p-button-danger"
              icon="pi pi-ban"
            />
          </div>
        </div>

        {/*
      <div>
        <Link to={`/user/${requester.alias}`}>{requester.displayName}</Link>
        <p>Wants to be your friend.</p>
        <div>Since: {formattedDate}</div>
        <Button
          label="Accept"
          className="p-button-outlined p-button-sm"
          icon="pi pi-check"
          onClick={() =>
            confirmDialog({
              message: `Are you sure you want to approve ${requester.displayName}?`,
              header: "Approve Friend",
              accept: () => {
                setRequestsLoading(data.length)
                dispatch(
                  approveConnection(requester._id, requester.displayName)
                )
                notSeenNotification &&
                  notSeenNotification.state === 1 &&
                  dispatch(
                    setConnectionNotificationsSeen(notSeenNotification._id)
                  )
                setRequestsLoading(null)
              },
            })
          }
        />
        <Button
          label="Reject"
          className="p-button-outlined p-button-sm"
          icon="pi pi-times"
          onClick={() =>
            confirmDialog({
              message: `Are you sure you want to reject ${requester.displayName} request?`,
              header: "Reject Friend Request",
              acceptClassName: "p-button-danger",
              accept: () => {
                setRequestsLoading(data.length)
                dispatch(removeConnection(requester._id, requester.displayName))
                notSeenNotification &&
                  notSeenNotification.state === 1 &&
                  dispatch(
                    setConnectionNotificationsSeen(notSeenNotification._id)
                  )
                setRequestsLoading(null)
              },
            })
          }
        />
      </div>*/}
      </div>
    </RequestsCardWrapper>
  )
}
