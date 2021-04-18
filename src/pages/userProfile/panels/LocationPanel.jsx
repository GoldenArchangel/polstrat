import React from "react"
import { Panel } from "primereact/panel"
import {
  TextField,
  ElementsWrapperSimple,
} from "../../../components/elements/PanelElements"
import { checkAllFields } from "../../../utils/validators"

const LocationPanel = ({ data }) => {
  let { living, location } = data.information

  const locationFormat = l => {
    if (l.country && l.region && l.city) {
      return `${l.country ? l.country + `, ` : ""}${
        l.region ? l.region + `, ` : ""
      }${l.city ? l.city : ""}`
    }

    if (l.country && l.region) {
      return `${l.country ? l.country + `, ` : ""}${l.region ? l.region : ""}`
    }

    if (l.country) {
      return `${l.country ? l.country : ""}`
    }
  }

  const populated = checkAllFields([living, location])

  return (
    <Panel header="Location">
      {populated ? (
        <>
          <div className="profile-row">
            <div className="profile-column">
              {location.length ? (
                <ElementsWrapperSimple>
                  <p className="option share-tech-mono primary">{`Reside location${
                    location.length > 1 ? "s" : ""
                  }`}</p>
                  {location.map((l, i) => {
                    return (
                      <div
                        key={i}
                        className="detail"
                        style={{ marginBottom: "1.3125em" }}
                      >
                        {locationFormat(l)}
                      </div>
                    )
                  })}
                </ElementsWrapperSimple>
              ) : null}
            </div>
            <div className="profile-column">
              {TextField(living, "Where you live")}
            </div>
          </div>
        </>
      ) : (
        "There is no information about user location."
      )}
    </Panel>
  )
}

export default LocationPanel
