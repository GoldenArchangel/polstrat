import React from "react"
import ProfileContainerWrapper from "./ProfileContainerWrapper"

const ProfileContainer = ({
  pageTitle,
  header,
  target,
  switchTarget,
  tag,
  buttons,
  description,
  children,
}) => {
  return (
    <ProfileContainerWrapper
      switchTarget={switchTarget}
      tag={tag}
      description={description}
      header={header}
    >
      <div className="profile-header">
        <div className="profile-page-title">
          <h3 className="share-tech-mono">{pageTitle}</h3>
        </div>
        {header ? (
          header
        ) : (
          <>
            <div className="profile-page-title">
              <h3 className="share-tech-mono">{pageTitle}</h3>
            </div>
            <div className="profile-presentation">
              <div className="profile-target">
                <div className="target-name">
                  <h1 className="share-tech-mono">{target}</h1>
                </div>
                {tag ? (
                  <div className="target-tag">
                    <h2 className="share-tech-mono">{tag}</h2>
                  </div>
                ) : null}
              </div>
              <div className="profile-buttons">{buttons}</div>
            </div>
          </>
        )}
      </div>
      <div className="profile-body">{children}</div>
    </ProfileContainerWrapper>
  )
}

export default ProfileContainer
