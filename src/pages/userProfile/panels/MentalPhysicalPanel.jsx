import React from "react"
import { Panel } from "primereact/panel"
import { TextField } from "../../../components/elements/PanelElements"
import { checkAllFields } from "../../../utils/validators"

const CommunityPanel = ({ data }) => {
  const {
    mentalShape,
    personalityTest,
    physicalShape,
    physicalHealth,
    physicalHealthReason,
  } = data.information

  const populated = checkAllFields([
    mentalShape,
    personalityTest,
    physicalShape,
    physicalHealth,
    physicalHealthReason,
  ])

  return (
    <Panel header="Physical and Mental">
      {populated ? (
        <>
          <div className="profile-row">
            <div className="profile-column">
              {TextField(physicalShape, "Physical shape")}
              {TextField(physicalHealth, "Physical health")}
              {TextField(physicalHealthReason, "Physical health reason")}
            </div>

            <div className="profile-column">
              {TextField(mentalShape, "Mental Shape")}
              {TextField(personalityTest, "(16)Personality test result")}
            </div>
          </div>
        </>
      ) : (
        "There is no information about user Physical and Mental."
      )}
    </Panel>
  )
}

export default CommunityPanel
