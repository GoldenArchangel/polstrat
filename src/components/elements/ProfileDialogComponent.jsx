import styled from "styled-components"
import { Dialog } from "primereact/dialog"

export const ProfileDialogWrapper = styled(Dialog)`
  width: 95vw;
  max-width: 1060px;

  @media screen and (min-width: 768px) {
    width: 85vw;
  }

  .profile-dialog-title {
    margin-bottom: 0px;
    margin-top: 10px;
    font-size: 1em;

    @media screen and (min-width: 768px) {
      font-size: 2em;
    }
  }

  .p-dialog-header {
    background-color: var(--dark-hard);
  }
  .p-dialog-content {
    background-color: var(--dark-hard);
  }
`

const ProfileDialogComponent = props => {
  return <ProfileDialogWrapper blockScroll {...{ ...props }} />
}

export default ProfileDialogComponent
