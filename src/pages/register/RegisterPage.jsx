import React, { lazy, Suspense } from "react"
import { Card } from "primereact/card"
import RegisterComponent from "../../components/RegisterComponent/RegisterComponent"

const RegisterPage = props => {
  return (
    <Card style={{ display: "flex", justifyContent: "center" }}>
      <h1>Create Account</h1>
      <RegisterComponent {...{ props }} />
    </Card>
  )
}

export default RegisterPage
