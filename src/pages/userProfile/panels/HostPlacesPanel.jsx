import React from "react"
import { Panel } from "primereact/panel"
import {
  TextField,
  DoubleTextField,
  BooleanField,
} from "../../../components/elements/PanelElements"
import { checkAllFields } from "../../../utils/validators"

const HostPlacesPanel = ({ data }) => {
  const {
    rentLivingPlace,
    placesForVacationers,
    ownLand,
    howMuchLand,
    willingToRent,
    areInDebt,
    areYouPrepper,
    willingContributLand,
    describeYourFarmlands,
    sayAboutYourself,
  } = data.information

  const populated = checkAllFields([
    rentLivingPlace,
    placesForVacationers,
    ownLand,
    howMuchLand,
    willingToRent,
    areInDebt,
    areYouPrepper,
    willingContributLand,
    describeYourFarmlands,
    sayAboutYourself,
  ])

  return (
    <Panel header="Places and Host">
      {populated ? (
        <>
          <div className="profile-row">
            <div className="profile-column">
              {DoubleTextField({
                field1: {
                  value: rentLivingPlace,
                  title: "Rent living place",
                  res: `${rentLivingPlace ? "Yes" : "No"}`,
                },
                field2: {
                  value: placesForVacationers,
                  title: "Rooms to rent",
                  res: `${placesForVacationers ? "Yes" : "No"}`,
                },
              })}
              {TextField(willingToRent, "Willing to rent")}
              {DoubleTextField({
                field1: {
                  value: areInDebt,
                  title: "Is in debt",
                  res: `${areInDebt ? "Yes" : "No"}`,
                },
                field2: {
                  value: areYouPrepper,
                  title: "Is a prepper",
                  res: `${areYouPrepper ? "Yes" : "No"}`,
                },
              })}
            </div>
            <div className="profile-column">
              {BooleanField(ownLand, "Own land")}
              {TextField(howMuchLand, "How much land")}
              {BooleanField(
                willingContributLand,
                "Willing to contribute land to Farmstadt"
              )}
              {TextField(describeYourFarmlands, "Describe your farmlands")}
              {TextField(sayAboutYourself, "About the user")}
            </div>
          </div>
        </>
      ) : (
        "There is no information about user places or host."
      )}
    </Panel>
  )
}

export default HostPlacesPanel
