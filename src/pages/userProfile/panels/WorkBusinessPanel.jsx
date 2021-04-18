import React from "react"
import { Panel } from "primereact/panel"
import {
  TextField,
  DoubleTextField,
  BooleanField,
  SimpleListField,
} from "../../../components/elements/PanelElements"
import { checkAllFields } from "../../../utils/validators"

const WorkBusinessPanel = ({ data }) => {
  const {
    haveJob,
    lookingForJob,
    jobCategories,
    ownAnyBusiness,
    chooseBusinessCategory,
    openToHire,
    skillRequirements,
    willingToOperate,
  } = data.information

  const populated = checkAllFields([
    haveJob,
    lookingForJob,
    jobCategories,
    ownAnyBusiness,
    chooseBusinessCategory,
    openToHire,
    skillRequirements,
    willingToOperate,
  ])

  return (
    <Panel header="Work and Business">
      {populated ? (
        <>
          <div className="profile-row">
            <div className="profile-column">
              {DoubleTextField({
                field1: {
                  value: haveJob,
                  title: "Have a job",
                  res: `${haveJob ? "Yes" : "No"}`,
                },
                field2: {
                  value: lookingForJob,
                  title: "Looking for a job",
                  res: `${lookingForJob ? "Yes" : "No"}`,
                },
              })}
              {SimpleListField(jobCategories, "Jobs interested in")}
              {BooleanField(
                willingToOperate,
                "Willing to operate in Tradestrat"
              )}
            </div>
            <div className="profile-column">
              {DoubleTextField({
                field1: {
                  value: ownAnyBusiness,
                  title: "Own a business",
                  res: `${ownAnyBusiness ? "Yes" : "No"}`,
                },
                field2: {
                  value: openToHire,
                  title: "Open to hire",
                  res: `${openToHire ? "Yes" : "No"}`,
                },
              })}
              {TextField(chooseBusinessCategory, "Category of the business")}
              {TextField(skillRequirements, "Skill requirements")}
            </div>
          </div>
        </>
      ) : (
        "There is no information about user work or business."
      )}
    </Panel>
  )
}

export default WorkBusinessPanel
