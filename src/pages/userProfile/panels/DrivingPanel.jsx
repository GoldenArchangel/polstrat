import React from "react"
import { Panel } from "primereact/panel"
import {
  TextField,
  DoubleTextField,
  BooleanField,
} from "../../../components/elements/PanelElements"
import { checkAllFields } from "../../../utils/validators"

const WorkBusinessPanel = ({ data }) => {
  const {
    drive,
    ownDrivingLicense,
    lightLandVehicles,
    heavyLandVehicles,
    aircraft,
    watercraft,
    farmEquipment,
    rideHorses,
    otherVehicles,
    writeOtherVehicles,
  } = data.information

  const populated = checkAllFields([
    drive,
    ownDrivingLicense,
    lightLandVehicles,
    heavyLandVehicles,
    aircraft,
    watercraft,
    farmEquipment,
    rideHorses,
    otherVehicles,
    writeOtherVehicles,
  ])

  return (
    <Panel header="Driving skills">
      {populated ? (
        <>
          <div className="profile-row">
            <div className="profile-column">
              {DoubleTextField({
                field1: {
                  value: drive,
                  title: "Knows how to drive",
                  res: `${drive ? "Yes" : "No"}`,
                },
                field2: {
                  value: ownDrivingLicense,
                  title: "Driver license",
                  res: `${ownDrivingLicense ? "Yes" : "No"}`,
                },
              })}
              {DoubleTextField({
                field1: {
                  value: lightLandVehicles,
                  title: "Light land vehicles",
                  res: `${lightLandVehicles ? "Yes" : "No"}`,
                },
                field2: {
                  value: heavyLandVehicles,
                  title: "Heavy land vehicles",
                  res: `${heavyLandVehicles ? "Yes" : "No"}`,
                },
              })}
              {DoubleTextField({
                field1: {
                  value: aircraft,
                  title: "Aircrafts",
                  res: `${aircraft ? "Yes" : "No"}`,
                },
                field2: {
                  value: watercraft,
                  title: "Watercrafts",
                  res: `${watercraft ? "Yes" : "No"}`,
                },
              })}
            </div>
            <div className="profile-column">
              {DoubleTextField({
                field1: {
                  value: farmEquipment,
                  title: "Farm equipements",
                  res: `${farmEquipment ? "Yes" : "No"}`,
                },
                field2: {
                  value: rideHorses,
                  title: "Ride horses",
                  res: `${rideHorses ? "Yes" : "No"}`,
                },
              })}
              {BooleanField(otherVehicles, "Drive other vehicles")}
              {TextField(writeOtherVehicles, "What vehicles can drive")}
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
