/*
import { UNSET_AUTOLOAD, ADD_TO_AUTOLOAD, REMOVE_FROM_AUTOLOAD } from "../types"

export const unsetAutoload = data => {
  return async dispatch => {
    try {
      await dispatch({ type: UNSET_AUTOLOAD })
    } catch (error) {}
  }
}

export const addToAutoload = id => {
  return async dispatch => {
    try {
      await dispatch({ type: ADD_TO_AUTOLOAD })
    } catch (error) {}
  }
}

export const removeFromAutoload = id => {
  return async dispatch => {
    try {
      await dispatch({ type: REMOVE_FROM_AUTOLOAD })
    } catch (error) {}
  }
}

//import Api from "../../Api"
//import { checkAuthentication } from "./authentication"
//import { setLoading } from "./components"
//import { setUserConnect } from "./socket"
//import { INIT_APP } from "../types"

// APP INIT ////////////////////////////////

/*
export const setHealthCheck = () => {
  return async dispatch => {
    try {
      //await Api({ url: "/health-check" })
      //await dispatch({ type: SET_HEALTH_CHECK })
    } catch (error) {
      //await dispatch({ type: UNSET_HEALTH_CHECK })
    }
  }
}
*/

/*
export const setSocketState = () => {
  return async (dispatch, getState) => {
    try {
      const {
        app: { authenticated },
        user: {
          current: { _id, alias },
        },
      } = await getState()

      if (authenticated) {
        await dispatch(setUserConnect(_id, alias))
      } else {
        await dispatch(setUserConnect(false, "Unknown"))
      }
    } catch (error) {}
  }
}

export const setupApp = ok => {
  return async (dispatch, getState) => {
    try {
      const {
        app: { healthCheck, authenticated },
      } = await getState()

      if (healthCheck) {
        await dispatch(checkAuthentication())
      }

      await dispatch(setSocketState(authenticated))
    } catch (error) {}
  }
}
*/
