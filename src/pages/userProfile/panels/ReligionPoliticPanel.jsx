import React from "react"
import { Panel } from "primereact/panel"
import {
  TextField,
  BooleanField,
  SimpleListField,
} from "../../../components/elements/PanelElements"
import { checkAllFields } from "../../../utils/validators"

const ReligionPanel = ({ data }) => {
  const {
    religion,
    religiousPref,
    religiousMatch,
    halalKosherkRitual,
    politicalAllegiance,
    matchPolitical,
    voteNationalElections,
    politicalActivism,
  } = data.information

  const populated = checkAllFields([
    religion,
    religiousPref,
    religiousMatch,
    halalKosherkRitual,
    politicalAllegiance,
    matchPolitical,
    voteNationalElections,
    politicalActivism,
  ])

  return (
    <Panel header="Religion and Politics">
      {populated ? (
        <>
          <div className="profile-row">
            <div className="profile-column">
              {TextField(religion, "Religion")}
              {BooleanField(
                religiousMatch,
                "Need to match religious preferences"
              )}
              {SimpleListField(religiousPref, "Religion Preferences")}
              {BooleanField(halalKosherkRitual, "Ok with Halal/Kosher ritual")}
            </div>
            <div className="profile-column">
              {TextField(politicalAllegiance, "Political allegiance")}
              {BooleanField(
                matchPolitical,
                "Need to match political allegiance preferences"
              )}
              {BooleanField(
                voteNationalElections,
                "Vote in national elections"
              )}
              {BooleanField(
                politicalActivism,
                "Participate in any political activism"
              )}
            </div>
          </div>
        </>
      ) : (
        "There is no information about user Religion or Politics."
      )}
    </Panel>
  )
}

export default ReligionPanel
