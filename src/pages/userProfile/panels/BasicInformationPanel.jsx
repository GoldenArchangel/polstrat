import React from "react"
import { Panel } from "primereact/panel"
import {
  TextField,
  DoubleTextField,
  SimpleListField,
  ElementsWrapperSimple,
} from "../../../components/elements/PanelElements"
import { Link } from "react-router-dom"
import { Tag } from "primereact/tag"
import styled from "styled-components"

const TagWrapper = styled(Tag)`
  color: #ffffff;
  background: none;
  border: 1px solid var(--primary-color);
  margin-right: 10px;

  .p-tag-value {
    line-height: 1em;
    text-transform: uppercase;
  }
`

const BasicInformationPanel = ({ data }) => {
  const { displayName, Community } = data
  const {
    age,
    ageRange,
    sex,
    nationality,
    languages,
    romanticRelationship,
    haveChildren,
  } = data.information

  return (
    <Panel header="Basic Information">
      <div className="profile-row">
        <div className="profile-column">
          {TextField(displayName, "Username")}
          {DoubleTextField({
            field1: {
              value: age,
              title: "Age",
              res: `${age} years`,
            },
            optional: {
              value: ageRange,
              title: "Age Range",
              res: `Between ${ageRange} years`,
            },
            field2: {
              value: sex,
              title: "Sex",
              res: `${sex === "M" ? "Male" : "Female"}`,
            },
          })}
          {DoubleTextField({
            field1: {
              value: romanticRelationship,
              title: "Relationship",
            },
            field2: {
              value: haveChildren,
              title: "Have children",
              res: `${haveChildren ? "Yes" : "No"}`,
            },
          })}
        </div>
        <div className="profile-column">
          {TextField(nationality, "Nationality")}
          {SimpleListField(languages, "Languages")}
          {Community ? (
            <ElementsWrapperSimple>
              <p className="option share-tech-mono primary">Community</p>
              <p className="detail">
                {data.Community.owner === data._id ? (
                  <TagWrapper value="Owner"></TagWrapper>
                ) : null}

                <Link
                  className="community"
                  to={`/community/${Community.alias}`}
                >
                  [{Community.tag}]∙{Community.displayName}
                </Link>
              </p>
            </ElementsWrapperSimple>
          ) : null}
        </div>
      </div>
    </Panel>
  )
}

export default BasicInformationPanel
