import React, { useState } from "react"
import { Button } from "primereact/button"
import { Link } from "react-router-dom"
import moment from "moment"
import UserProfile from "../../pages/userProfile/UserProfilePage"
import { FriendsCardWrapper } from "./FriendsCardWrapper"
import ProfileDialogComponent from "../elements/ProfileDialogComponent"

export const FriendsCardComponent = ({ props, options, data }) => {
  const [displayBasic, setDisplayBasic] = useState(false)
  const { recipient, updatedAt } = data
  const { dispatch, confirmDialog, removeConnection } = options

  const { match, history } = props
  const formattedDate = moment(new Date(updatedAt), "YYYYMMDD").fromNow()

  if (!recipient) {
    return <p>ERROR</p>
  }

  return (
    <FriendsCardWrapper>
      <ProfileDialogComponent
        header={
          <h2 className="profile-dialog-title share-tech-mono">
            <span className="community">
              {recipient.Community ? `[${recipient.Community.tag}]` : null}
            </span>
            <span className="primary">{recipient.displayName}</span> Profile
          </h2>
        }
        modal={true}
        closeOnEscape
        dismissableMask
        visible={displayBasic}
        onHide={() => setDisplayBasic(false)}
      >
        <UserProfile {...{ match, history, modalAlias: recipient.alias }} />
      </ProfileDialogComponent>

      <div className="card-start">
        <div className="card-name">
          <i className="pi pi-user"></i>
          {recipient.Community ? (
            <span className="card-tag">
              <Link
                className="community share-tech-mono"
                to={`/community/${recipient.Community.alias}`}
              >
                [{recipient.Community.tag}]
              </Link>
            </span>
          ) : null}
          <Link className="share-tech-mono" to={`/user/${recipient.alias}`}>
            {recipient.displayName}
          </Link>
        </div>
        <div className="card-date">
          <span className="title secondary">Friends since</span>
          <span className="date secondary">{formattedDate}</span>
        </div>
      </div>

      <div className="card-end">
        <div className="card-menu">
          <Button
            label="Profile"
            className="p-button-outlined p-button-sm p-button-secondary"
            icon="pi pi-id-card"
            onClick={() => setDisplayBasic(true)}
          />

          <Button
            label="Unfriend"
            className="p-button-outlined p-button-sm"
            icon="pi pi-user-minus"
            onClick={() =>
              confirmDialog({
                message: `Are you sure you want to remove ${recipient.displayName}?`,
                header: "Remove Friend",
                acceptClassName: "p-button-danger",
                accept: () => {
                  dispatch(
                    removeConnection(recipient._id, recipient.displayName)
                  )
                },
              })
            }
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
    </FriendsCardWrapper>
  )
}
