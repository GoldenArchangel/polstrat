import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getCommunity } from "../../store/actions/community"
import InformationPanel from "./panels/InformationPanel"
import ProfileContainer from "../../components/containers/ProfileContainer/ProfileContainer"
import { Button } from "primereact/button"

const CommunityPage = ({ match }) => {
  const dispatch = useDispatch()
  const {
    community: { fetched },
    error,
  } = useSelector(state => state)

  // TODO: resolve the warning
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => dispatch(getCommunity(match.params.alias)), [])

  //TODO: Template for "community not found" with possible search bar
  if (error.community.get) {
    return (
      <div>
        <h1 className="share-tech-mono p-text-center">Community not found</h1>
        <p></p>
        <p className="share-tech-mono p-text-center">
          The Community you are looking for does not exist.
        </p>
      </div>
    )
  }

  const buttons = (
    <div className="p-buttonset">
      <Button
        label="Join"
        className="p-button-outlined p-button-sm"
        icon="pi pi-user-plus"
      />
      <Button
        label="Message"
        className="p-button-outlined p-button-sm"
        icon="pi pi-send"
      />
    </div>
  )

  const targetName = <span className="community">{fetched.displayName}</span>

  return (
    <ProfileContainer
      pageTitle="Community Profile"
      target={`[${fetched.tag}]`}
      switchTarget="true"
      tag={targetName}
      buttons={buttons}
    >
      <InformationPanel {...{ data: fetched }} />
    </ProfileContainer>
  )
}

export default CommunityPage
