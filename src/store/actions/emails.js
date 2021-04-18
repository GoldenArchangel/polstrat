import { setMessageOverlay } from "./overlay"
import Request from "../../request"
import { setLoading } from "./components"
import { SET_CONFIRMED_EMAIL } from "../types"

// CONFIRM EMAIL /////////////////////////////////////

export const setConfirmEmail = token => {
  return async dispatch => {
    try {
      await dispatch(setLoading(true))
      const request = new Request()
      const response = await request.get({
        url: `/auth/confirm-email/${token}`,
      })

      if (response && response.data && response.data.confirmed) {
        await dispatch({
          type: SET_CONFIRMED_EMAIL,
        })
        await dispatch(
          setMessageOverlay({
            type: "message",
            severity: "info",
            summary: "Email confirmed",
            detail: "You account was confirmed successfully.",
            life: 4000,
          })
        )

        await dispatch(setLoading(false))
        return true
      } else {
        await dispatch(
          setMessageOverlay({
            type: "message",
            severity: "error",
            summary: "Email not confirmed",
            detail: "Something went wrong, try again.",
            life: 4000,
          })
        )
        await dispatch(setLoading(false))
        return false
      }
    } catch (error) {}
  }
}
