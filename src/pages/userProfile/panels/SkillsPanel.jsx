import React from "react"
import { Panel } from "primereact/panel"
import {
  TextField,
  BooleanField,
  DoubleTextField,
} from "../../../components/elements/PanelElements"
import { checkAllFields } from "../../../utils/validators"

const ReligionPanel = ({ data }) => {
  const {
    skillsSpecialization,
    willingToLearn,
    willingToTeach,
    typeOfTeach,
    compensated,
    hobbiesAndInterests,
    likeToLearn,
    swim,
    farmingExperience,
  } = data.information

  const populated = checkAllFields([
    skillsSpecialization,
    willingToLearn,
    willingToTeach,
    typeOfTeach,
    compensated,
    hobbiesAndInterests,
    likeToLearn,
    swim,
    farmingExperience,
  ])

  return (
    <Panel header="Skills">
      {populated ? (
        <>
          <div className="profile-row">
            <div className="profile-column">
              {TextField(
                skillsSpecialization,
                "Skills, specialization, good at"
              )}
              {TextField(hobbiesAndInterests, "Hobbies and interests")}
              {DoubleTextField({
                field1: {
                  value: swim,
                  title: "Knows how to swim",
                  res: `${swim ? "Yes" : "No"}`,
                },
                field2: {
                  value: farmingExperience,
                  title: "Farming experience",
                  res: `${farmingExperience ? "Yes" : "No"}`,
                },
              })}
              {TextField(likeToLearn, "Would Like to learn")}
            </div>
            <div className="profile-column">
              {BooleanField(willingToLearn, "Willing to learn new things")}
              {BooleanField(willingToTeach, "Willing to teach/train people")}
              {TextField(typeOfTeach, "What type of teach can provide")}
              {TextField(compensated, "How user wish to be compensated")}
            </div>
          </div>
        </>
      ) : (
        "There is no information about user Skills."
      )}
    </Panel>
  )
}

export default ReligionPanel
