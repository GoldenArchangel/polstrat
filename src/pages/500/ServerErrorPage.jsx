import React from "react"

const ServerErrorPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>SERVER ERROR PAGE</h1>
      <p>No connection to internet or ths server is temporary down.</p>
      <p>
        Try to refresh page, check your internet connection or waut untill
        server goes online.
      </p>
    </div>
  )
}

export default ServerErrorPage
