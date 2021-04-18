import React, { useEffect, useState } from "react"
import Request from "../../../request"

const SettingsPage = () => {
  const [devices, setDevices] = useState([])

  useEffect(() => {
    const getDevices = async () => {
      const request = new Request()
      const devicesFetched = await request.get({
        url: "/user/devices",
      })

      setDevices(devicesFetched)
    }

    getDevices()
  }, [])

  console.log(devices)

  if (devices && devices.data) {
    return (
      <p>
        {devices.data.map(device => {
          return (
            <div>
              <p>{device.type}</p>
              <p>{device.os}</p>
              <p>{device.browser}</p>
              <p>{device.ua}</p>
              <p>{device.createdAt}</p>
              <hr />
            </div>
          )
        })}
      </p>
    )
  } else {
    return <h1>Loading...</h1>
  }
}

export default SettingsPage
