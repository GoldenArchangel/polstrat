import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { authentication } from "../../store/actions/authentication"
import { setMessageOverlay } from "../../store/actions/overlay"
import { setResetError } from "../../store/actions/error"
import { Link } from "react-router-dom"
import { Card } from "primereact/card"
import { InputText } from "primereact/inputtext"
import { Password } from "primereact/password"
import { Button } from "primereact/button"
import { Checkbox } from "primereact/checkbox"
import { Message } from "primereact/message"
import LoginWrapper from "./LoginWrapper.js"
import SpinnerComponent from "../elements/SpinnerComponent"
import { browserName, deviceType, osName, getUA } from "react-device-detect"

const LoginComponent = ({ props }) => {
  const dispatch = useDispatch()
  const { error } = useSelector(state => state)
  const [loading, setLoading] = useState(false)

  const initialState = {
    username: "",
    password: "",
    remember: false,
    deviceInfo: {
      type: deviceType || null,
      os: osName || null,
      browser: browserName || null,
      ua: getUA || null,
    },
  }

  const [data, setData] = useState(initialState)

  const filterDefault = {
    error: false,
    msg: null,
    class: null,
  }
  const [usernameFilter, setUsernameFilter] = useState(filterDefault)
  const [passwordFilter, setPasswordFilter] = useState(filterDefault)

  const resetAll = () => {
    setUsernameFilter(filterDefault)
    setPasswordFilter(filterDefault)
    setData(initialState)
    dispatch(setResetError())
  }

  const checkRemember = () =>
    setData({
      ...data,
      remember: !data.remember,
    })

  const register = () => props.history.push("/register")

  const handleChange = e => {
    const { name, value } = e.target

    setData({ ...data, [name]: value })

    if (!data.username.length && name === "username") {
      setUsernameFilter(filterDefault)
    }

    if (!data.password.length && name === "password") {
      setPasswordFilter(filterDefault)
    }
  }

  const checkEmpty = () => {
    const userIsEmpty = data.username === ""
    const passIsEmpty = data.password === ""

    setUsernameFilter({
      error: userIsEmpty,
      msg: userIsEmpty ? "Username/Email field is empty." : null,
      class: userIsEmpty ? "p-invalid" : null,
    })

    setPasswordFilter({
      error: passIsEmpty,
      msg: passIsEmpty ? "Password field is empty." : null,
      class: passIsEmpty ? "p-invalid" : null,
    })
  }

  const submitLogin = async e => {
    if (e.keyCode && e.keyCode !== 13) {
      return
    }

    checkEmpty()

    if (data.username === "" || data.password === "") {
      return
    }

    setLoading(true)

    //try {
    // TODO: make a graceful fix for this
    // Need await to resolve promise
    const response = await dispatch(authentication(data))

    if (response) {
      //redirect after login
      props.history.push("/hub/dashboard")
    }
    //} catch (error) {
    //TODO: Set authentication server error
    //}
  }

  useEffect(() => {
    if (error.authentication.options.confirmed) {
      dispatch(
        setMessageOverlay({
          severity: "warn",
          summary: "Confirm Account",
          detail: "You need to confirm your account on your email.",
          life: 5000,
        })
      )

      resetAll()
    }

    if (error.authentication.options.blocked) {
      dispatch(
        setMessageOverlay({
          severity: "error",
          summary: "Blocked Account",
          detail:
            "Please try again later or reset your password to access your account.",
          life: 7000,
        })
      )

      resetAll()
    }

    if (!error.authentication.status) {
      return
    }

    const { username } = error.authentication.options
    const { password } = error.authentication.options

    setUsernameFilter({
      error: username,
      msg: username ? "Wrong Username or Email, try again." : null,
      class: username ? "p-invalid" : null,
    })

    setPasswordFilter({
      error: password,
      msg: password ? "Wrong Password, please try again." : null,
      class: password ? "p-invalid" : null,
    })

    if (username || password) {
      setData({ ...data, password: "" })
    }

    setLoading(false)

    // TODO: Check performance of this useEffect
    // eslint-disable-next-line
  }, [error, setLoading])

  const loginForm = (
    <>
      <div className="username-field">
        <div className="p-inputgroup">
          <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
          </span>
          <InputText
            name="username"
            value={data.username}
            className={usernameFilter.class}
            placeholder="Username or Email"
            onChange={e => handleChange(e)}
            onKeyDown={e => submitLogin(e)}
            validateOnly={true}
          />
        </div>

        {usernameFilter.error ? (
          <small className="p-invalid p-d-block">
            <i className="pi pi-times-circle"> </i> {usernameFilter.msg}
          </small>
        ) : null}
      </div>

      <div className="password-field">
        <div className="p-inputgroup">
          <span className="p-inputgroup-addon">
            <i className="pi pi-key"></i>
          </span>
          <Password
            name="password"
            className={passwordFilter.class}
            placeholder="Password"
            feedback={false}
            onChange={e => handleChange(e)}
            onKeyDown={e => submitLogin(e)}
          />
        </div>

        {passwordFilter.error ? (
          <small className="p-invalid p-d-block">
            <i className="pi pi-times-circle"> </i> {passwordFilter.msg}
          </small>
        ) : null}
      </div>
      <div className="checkbox-field">
        <div className="p-field-checkbox">
          <Checkbox
            value={data.remember}
            inputId="remember"
            onChange={e => checkRemember(e.checked)}
            checked={data.remember}
          />
          <label htmlFor="remember">
            <small>Remember this browser?</small>
          </label>
        </div>
      </div>

      {error.authentication.options.attempts > 0 &&
      error.authentication.options.attempts < 3 ? (
        <div className="warning-message">
          <Message
            severity="warn"
            text={`You have ${Math.abs(
              error.authentication.options.attempts - 3
            )} attempts.`}
          />
        </div>
      ) : null}

      {error.authentication.options.confirmed ? (
        <div className="warning-message">
          <Message severity="warn" text="Need to Confirm your email." />
        </div>
      ) : null}

      {error.authentication.options.blocked ? (
        <div className="warning-message">
          <Message severity="error" text="Blocked: 3 failed attempts." />
        </div>
      ) : null}

      <div className="submit-button">
        <Button
          className="p-button-outlined"
          label="Login"
          onClick={e => submitLogin(e)}
          onKeyDown={e => submitLogin(e)}
        />
      </div>
      <div className="separator">OR</div>

      <div className="register-button">
        <Button onClick={register} label="Create Account" />
      </div>
      <div className="forgot-password">
        <i className="pi pi-lock-open"></i>{" "}
        <Link to="reset">Reset Password</Link>
      </div>
    </>
  )

  const spinner = !error.authentication.server ? (
    <div className="login-spinner">
      <SpinnerComponent type="medium" />
      <h4 className="login-spinner-title share-tech-mono">Authenticating...</h4>
    </div>
  ) : (
    <div className="login-spinner">
      <div className="login-spinner-error">
        <i className="pi pi-info-circle"></i>
        <h4 className="login-spinner-error-title share-tech-mono">
          Something went wrong!
        </h4>
        <p className="login-spinner-error-sub share-tech-mono">
          Sorry for the inconvenience,
          <br />
          please try to refresh the page or
          <br />
          check the internet connection.
        </p>
      </div>
    </div>
  )

  return (
    <LoginWrapper>
      <Card className="login-fieldset">
        <h3 className="title-label share-tech-mono p-text-center">Login</h3>
        {loading ? spinner : loginForm}
      </Card>
    </LoginWrapper>
  )
}

export default LoginComponent
