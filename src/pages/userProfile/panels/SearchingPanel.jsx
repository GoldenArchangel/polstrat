import React from "react"
import { Panel } from "primereact/panel"
import {
  BooleanField,
  SimpleListField,
  DoubleTextField,
} from "../../../components/elements/PanelElements"
import { checkAllFields } from "../../../utils/validators"

const SearchingPanel = ({ data }) => {
  const {
    searchCommunity,
    lookingFriends,
    willingToMove,
    regionsToMove,
    willingToRegroup,
    likeMindedFriends,
  } = data.information

  const populated = checkAllFields([
    searchCommunity,
    lookingFriends,
    willingToMove,
    regionsToMove,
    willingToRegroup,
    likeMindedFriends,
  ])

  return (
    <Panel header="Search and Relocate">
      {populated ? (
        <>
          <div className="profile-row">
            <div className="profile-column">
              {DoubleTextField({
                field1: {
                  value: searchCommunity,
                  title: "Searching for a community",
                  res: `${searchCommunity ? "Yes" : "No"}`,
                },
                field2: {
                  value: lookingFriends,
                  title: "Looking for friends",
                  res: `${lookingFriends ? "Yes" : "No"}`,
                },
              })}
              {DoubleTextField({
                field1: {
                  value: willingToMove,
                  title: "Willing to move",
                  res: `${willingToMove ? "Yes" : "No"}`,
                },
                field2: {
                  value: willingToRegroup,
                  title: "Willing to regroup",
                  res: `${willingToRegroup ? "Yes" : "No"}`,
                },
              })}
            </div>
            <div className="profile-column">
              {SimpleListField(regionsToMove, "Regions to move")}
              {BooleanField(
                likeMindedFriends,
                "Have like minded friends in area"
              )}
            </div>
          </div>
        </>
      ) : (
        "There is no information about user search and relocation."
      )}
    </Panel>
  )
}

export default SearchingPanel
