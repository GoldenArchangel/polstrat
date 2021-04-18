import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setConfirmEmail } from "../../store/actions/emails"
import LoginComponent from "../../components/LoginComponent/LoginComponent"

const ConfirmResponsePage = props => {
  const dispatch = useDispatch()
  const { emailConfirmed } = useSelector(state => state.app)

  useEffect(() => {
    dispatch(setConfirmEmail(props.match.params.token))
  }, [dispatch, props.match.params.token])

  return emailConfirmed ? (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Your Account is confirmed.</h1>
        <LoginComponent {...{ props }} />
      </div>
    </>
  ) : (
    <h1>Loading...</h1>
  )
}

export default ConfirmResponsePage
