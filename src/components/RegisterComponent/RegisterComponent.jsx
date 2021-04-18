import React, { useState, useEffect } from "react"
import { InputText } from "primereact/inputtext"
import { Password } from "primereact/password"
import { Button } from "primereact/button"
import { useDispatch } from "react-redux"
import { create } from "../../store/actions/user"

const initialState = {
  username: "",
  password: "",
  email: "",
}

const RegisterComponent = ({ props }) => {
  const dispatch = useDispatch()
  const [data, setData] = useState(initialState)

  const handleChange = e => {
    const { name, value } = e.target

    setData({ ...data, [name]: value })
  }

  const submitRegister = async e => {
    if (e.keyCode && e.keyCode !== 13) {
      return
    }

    if (data.username === "" && data.password === "" && data.email === "") {
      return
    }

    const response = await dispatch(create(data))

    if (response) {
      console.log(response)
      props.history.push("/confirm-email")
    }
  }

  useEffect(() => {})

  return (
    <div>
      <InputText
        name="username"
        value={data.username}
        className=""
        placeholder="Username"
        onChange={e => handleChange(e)}
        onKeyDown={e => submitRegister(e)}
        validateOnly={true}
      />
      <br />
      <br />

      <InputText
        name="email"
        value={data.email}
        className=""
        placeholder="Email"
        onChange={e => handleChange(e)}
        onKeyDown={e => submitRegister(e)}
        validateOnly={true}
      />

      <br />
      <br />

      <Password
        name="password"
        className=""
        placeholder="Password"
        onChange={e => handleChange(e)}
        onKeyDown={e => submitRegister(e)}
      />
      <br />
      <br />

      <Button
        className="p-button-outlined"
        label="Submit"
        onClick={e => submitRegister(e)}
        onKeyDown={e => submitRegister(e)}
      />
    </div>
  )
}

export default RegisterComponent
