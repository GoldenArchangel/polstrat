import React, { useEffect, useState, lazy, Suspense } from "react"
import { useSelector, useDispatch } from "react-redux"
import { unsetFetchedUser, getUser } from "../../store/actions/user"
import {
  requestUser,
  removeConnection,
  approveConnection,
  connectionNotifications,
  setConnectionNotificationsSeen,
} from "../../store/actions/userConnections"
import ProfileContainer from "../../components/containers/ProfileContainer/ProfileContainer"
import SpinnerComponent from "../../components/elements/SpinnerComponent"
import { Button } from "primereact/button"
import { Link } from "react-router-dom"
import { confirmDialog } from "primereact/confirmdialog"
import {
  BasicInformationPanel,
  LocationPanel,
  ReligionPoliticPanel,
  SearchingPanel,
  MentalPhysicalPanel,
  SkillsPanel,
  WorkBusinessPanel,
  DrivingPanel,
  HostPlacesPanel,
  RibbonsPanel,
} from "./panels"
import { HeaderWrapper } from "./UserProfilePageWrapper.js"

const ProfilePage = ({ match, history, modalAlias }) => {
  const dispatch = useDispatch()
  // this state is needed for triggering the loading spinner
  const [loadingStatus, setLoadingStatus] = useState(null)

  const {
    user: {
      fetched,
      current,
      connection: { notifications },
    },
    error,
  } = useSelector(state => state)

  useEffect(() => dispatch(connectionNotifications()), [dispatch])

  useEffect(() => {
    if (fetched._id === current._id) {
      history.push("/hub/profile")
      return
    }

    if (modalAlias) {
      dispatch(getUser(modalAlias))
    } else if (!fetched._id || match.params.alias !== fetched.alias) {
      dispatch(getUser(match.params.alias))
    }
  }, [
    dispatch,
    fetched._id,
    match.params.alias,
    fetched.alias,
    history,
    current._id,
    modalAlias,
  ])

  useEffect(() => {
    return () => dispatch(unsetFetchedUser())
  }, [dispatch])

  //TODO: Template for "user not found" with possible search bar
  if (!fetched.information && error.user.get) {
    return (
      <div>
        <h1 className="share-tech-mono p-text-center">User not found</h1>
        <p></p>
        <p className="share-tech-mono p-text-center">
          The user you are looking for does not exist.
        </p>
      </div>
    )
  }

  const addFriend = async () => {
    await setLoadingStatus(fetched.status)
    await dispatch(requestUser(fetched._id, fetched.displayName))
    await setLoadingStatus(null)
  }

  const removeRequest = async () => {
    await setLoadingStatus(fetched.status)
    await dispatch(removeConnection(fetched._id, fetched.displayName))
    await setLoadingStatus(null)
  }

  const [notSeenNotification] = notifications
    ? notifications.filter(
        n => n.UserConnection && n.UserConnection.requester._id === fetched._id
      )
    : []

  const approveRequest = async () => {
    await setLoadingStatus(fetched.status)
    await dispatch(approveConnection(fetched._id, fetched.displayName))
    notSeenNotification &&
      notSeenNotification.state === 1 &&
      dispatch(setConnectionNotificationsSeen(notSeenNotification._id))
    await setLoadingStatus(null)
  }

  const rejectRequest = async () => {
    await setLoadingStatus(fetched.status)
    await dispatch(removeConnection(fetched._id, fetched.displayName))
    notSeenNotification &&
      notSeenNotification.state === 1 &&
      dispatch(setConnectionNotificationsSeen(notSeenNotification._id))

    await setLoadingStatus(null)
  }

  const messageButton = (
    <Button
      label="Send"
      className="p-button-outlined p-button-sm p-button-info"
      icon="pi pi-send"
    />
  )

  const blockButton = (
    <Button
      className="p-button-outlined p-button-sm p-button-danger"
      icon="pi pi-ban"
    />
  )

  const addButton = (
    <Button
      label="Add"
      className="p-button-outlined p-button-sm"
      icon="pi pi-user-plus"
      onClick={() => {
        confirmDialog({
          message: `Are you sure you want to add ${fetched.displayName}?`,
          header: "Add Friend",
          accept: addFriend,
        })
      }}
    />
  )

  const approveButton = (
    <div className="p-buttonset">
      <Button
        label="Accept"
        className="p-button-outlined p-button-sm"
        icon="pi pi-check"
        onClick={() => {
          confirmDialog({
            message: `Accept ${fetched.displayName} as your friend?`,
            header: "Accept Friend",
            acceptClassName: "p-button-danger",
            accept: approveRequest,
          })
        }}
      />
      <Button
        label="Reject"
        className="p-button-outlined p-button-sm"
        icon="pi pi-times"
        onClick={() => {
          confirmDialog({
            message: `Are you sure you want to reject the request from ${fetched.displayName}?`,
            header: "Reject Request",
            acceptClassName: "p-button-danger",
            accept: rejectRequest,
          })
        }}
      />
    </div>
  )

  const requestedButton = (
    <Button
      label="Cancel"
      className="p-button-outlined p-button-sm"
      icon="pi pi-times"
      onClick={() => {
        confirmDialog({
          message: `Are you sure you want to cancel the request to ${fetched.displayName}?`,
          header: "Cancel Request",
          acceptClassName: "p-button-danger",
          accept: removeRequest,
        })
      }}
    />
  )

  const acceptedButton = (
    <Button
      label="Unfriend"
      className="p-button-outlined p-button-sm"
      icon="pi pi-user-minus"
      onClick={() => {
        confirmDialog({
          message: `Are you sure you want to remove ${fetched.displayName}?`,
          header: "Remove Friend",
          acceptClassName: "p-button-danger",
          accept: removeRequest,
        })
      }}
    />
  )

  const menu =
    typeof fetched.status === "number" && fetched.status !== loadingStatus ? (
      (fetched.status === 1 && approveButton) ||
      (fetched.status === 2 && requestedButton) ||
      (fetched.status === 3 && acceptedButton) ||
      (fetched.status === 0 && addButton)
    ) : (
      <div className="menu-spinner">
        <SpinnerComponent type="small" />
      </div>
    )

  const tag =
    fetched && fetched.Community ? (
      <span className="share-tech-mono">
        <Link
          className="community"
          to={`/community/${fetched.Community.alias}`}
        >
          [{fetched.Community.tag}]
        </Link>
      </span>
    ) : null

  const titleLabels = (
    <div className="header-label">
      {/*
        // 0 = no connection
        // 1 = requested you
        // 2 = you requested
        // 3 = friends
        // 4 = blocked you
        // 5 = you blocked
      */}

      {/* No connection */}
      {fetched.status === 0 ? (
        <p>
          User <span>{fetched.displayName}</span> profile page information.
        </p>
      ) : null}

      {/* Requested you */}
      {fetched.status === 1 ? (
        <p>
          <i className="pi pi-user-plus"></i> <span>{fetched.displayName}</span>{" "}
          sent you a friend request.
        </p>
      ) : null}

      {/* You Requested */}
      {fetched.status === 2 ? (
        <p>
          <i className="pi pi-user-plus"></i> You've sent a friend request to{" "}
          <span>{fetched.displayName}</span>.
        </p>
      ) : null}

      {/* You are friends with */}
      {fetched.status === 3 ? (
        <p>
          <i className="pi pi-users friends"></i> You are friends with{" "}
          <span>{fetched.displayName}</span>.
        </p>
      ) : null}

      {/* You Blocked */}
      {fetched.status === 5 ? (
        <p>
          <i className="pi pi-ban blocked"></i> You've blocked{" "}
          <span>{fetched.displayName}</span>.
        </p>
      ) : null}
    </div>
  )

  const menuLabels = (
    <div className="menu-label secondary">
      {/* No connection */}
      {fetched.status === 0 ? (
        <p>
          <i className="pi pi-info-circle"></i>
          Send a friend request.
        </p>
      ) : null}

      {/* Requested you */}
      {fetched.status === 1 ? (
        <p>
          <i className="pi pi-info-circle"></i>
          Accept or reject the friend request.
        </p>
      ) : null}

      {/* You Requested */}
      {fetched.status === 2 ? (
        <p>
          <i className="pi pi-info-circle"></i>Cancel the friend request.
        </p>
      ) : null}

      {/* You are friends with */}
      {fetched.status === 3 ? (
        <p>
          <i className="pi pi-info-circle"></i>Remove from your friends.
        </p>
      ) : null}

      {/* You Blocked */}
      {fetched.status === 5 ? (
        <p>
          <i className="pi pi-info-circle"></i>
          <i className="pi pi-info-circle"></i>Unblock{" "}
          <span>{fetched.displayName}</span>.
        </p>
      ) : null}
    </div>
  )

  const header = (
    <HeaderWrapper>
      <div className="header-description">
        <div className="header-title">
          <div className="header-name">
            <h1 className="share-tech-mono">
              {tag}
              {fetched.displayName}
            </h1>
          </div>
        </div>
        {titleLabels}
      </div>
      <div className="header-menu">
        <div className="menu-buttons">
          {menu}
          {messageButton}
          {blockButton}
        </div>
        {menuLabels}
      </div>
    </HeaderWrapper>
  )

  return fetched.information ? (
    <ProfileContainer
      pageTitle={
        !modalAlias ? (
          <div>
            <i className="pi pi-user"> </i> User Profile
          </div>
        ) : null
      }
      header={!modalAlias ? header : null}
      data={fetched}
    >
      <BasicInformationPanel {...{ data: fetched }} />
      <LocationPanel {...{ data: fetched }} />
      <WorkBusinessPanel {...{ data: fetched }} />
      <SkillsPanel {...{ data: fetched }} />
      <DrivingPanel {...{ data: fetched }} />
      <ReligionPoliticPanel {...{ data: fetched }} />
      <MentalPhysicalPanel {...{ data: fetched }} />
      <SearchingPanel {...{ data: fetched }} />
      <HostPlacesPanel {...{ data: fetched }} />
      <RibbonsPanel {...{ data: fetched }} />
    </ProfileContainer>
  ) : (
    <SpinnerComponent type="subpage" cardMarginTop="70px" />
  )
}

export default ProfilePage
