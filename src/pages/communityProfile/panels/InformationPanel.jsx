import React from "react"
import { Card } from "primereact/card"
import {
  TextField,
  BooleanField,
  SimpleListField,
  DoubleTextField,
  ElementsWrapperSimple,
} from "../../../components/elements/PanelElements"
import { Link } from "react-router-dom"

const InformationPanel = ({ data }) => {
  const {
    owner,
    count,
    description,
    requirementsToJoin,
    assetsAbout,
    business,
    fullyAware,
    operateTradestrat,
    searchForMembers,
    singleManWoman,
    politicalPreference,
    politicalAllowed,
    religiousPreference,
    religiousAllowed,
  } = data

  return (
    <Card>
      <div className="profile-title-separator share-tech-mono">
        <h3 style={{ marginTop: "0px" }}>Information</h3>
      </div>
      <div className="profile-row">
        <div className="profile-column">
          {owner ? (
            <ElementsWrapperSimple>
              <p className="option share-tech-mono primary">Owner</p>
              <p className="detail">
                <Link className="primary" to={`/user/${owner.alias}`}>
                  {owner.displayName}
                </Link>
              </p>
            </ElementsWrapperSimple>
          ) : null}
          {TextField(description, "Description")}
        </div>
        <div className="profile-column">
          {DoubleTextField({
            field1: {
              value: count,
              title: "Members",
            },
            field2: {
              value: searchForMembers,
              title: "Searching for members",
              res: `${searchForMembers ? "Yes" : "No"}`,
              size: 3,
            },
          })}
          {TextField(requirementsToJoin, "Requirements to join")}
        </div>
      </div>

      <div className="profile-title-separator share-tech-mono">
        <h3>Related</h3>
      </div>

      <div className="profile-row">
        <div className="profile-column">
          {TextField(assetsAbout, "Community assets")}
        </div>
        <div className="profile-column">{TextField(business, "Business")}</div>
      </div>

      <div className="profile-row">
        <div className="profile-column">
          {BooleanField(operateTradestrat, "Operate Tradestrat")}
        </div>
        <div className="profile-column">
          {DoubleTextField({
            field1: {
              value: singleManWoman,
              title: "Single Man and Woman",
              res: `${singleManWoman ? "Yes" : "No"}`,
            },
            field2: {
              value: fullyAware,
              title: "Fully aware",
              res: `${fullyAware ? "Yes" : "No"}`,
            },
          })}
        </div>
      </div>

      <div className="profile-title-separator share-tech-mono">
        <h3>Preferences</h3>
      </div>

      <div className="profile-row">
        <div className="profile-column">
          {BooleanField(politicalPreference, "Political preference")}
          {SimpleListField(politicalAllowed, "Politics Allowed")}
        </div>
        <div className="profile-column">
          {BooleanField(religiousPreference, "Religious preference")}
          {SimpleListField(religiousAllowed, "Religions Allowed")}
        </div>
      </div>
    </Card>
  )
}

export default InformationPanel
