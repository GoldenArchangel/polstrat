import React from "react"
import ProfileContainer from "../../../components/containers/ProfileContainer/ProfileContainer"
import { Panel } from "primereact/panel"

const ProfilePage = () => {
  return (
    <ProfileContainer pageTitle="Profile" target="My Profile">
      <Panel header="Basic Information">
        <p>Test my profile page...</p>
      </Panel>
    </ProfileContainer>
  )
}

export default ProfilePage
