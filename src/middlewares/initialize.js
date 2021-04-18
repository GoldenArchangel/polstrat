import {
  INIT_APP,
  SET_LOADING,
  UNSET_LOADING,
  SET_HEALTH_CHECK,
  UNSET_HEALTH_CHECK,
  SET_CURRENT_USER,
  SET_AUTHENTICATED,
} from "../store/types"

const initializeMiddleware = app => ({
  dispatch,
  getState,
}) => next => async action => {
  //console.log(action)

  if (action.type !== INIT_APP) {
    return next(action)
  }

  try {
    // start the loading
    await dispatch({ type: SET_LOADING })

    // lets see if we have connection with server api
    await app.setHealthCheck()

    if (
      !app.healthCheck ||
      (app.healthCheck && app.healthCheck.status !== 200)
    ) {
      await dispatch({ type: UNSET_LOADING })
      await dispatch({ type: UNSET_HEALTH_CHECK })
      return next(action)
    } else {
      await dispatch({ type: SET_HEALTH_CHECK })
    }

    // if dont have tokens just return
    if (!localStorage.access || !localStorage.refresh) {
      const { app: appState, user } = getState()

      if (appState.authenticated || user.current.ready) {
        await app.clearUser(dispatch)
      }

      await dispatch({ type: UNSET_LOADING })

      await app.socketConnect(dispatch)
      return next(action)
    }

    //If have a refreshed token and an access lets authenticate him
    await app.checkAuthentication()

    //If we have a user set the user and connect to socket
    if (app.currentUserRes && !app.currentUserRes.data.error) {
      await dispatch({
        type: SET_CURRENT_USER,
        payload: app.currentUserRes.data,
      })
      await dispatch({ type: SET_AUTHENTICATED })
      await dispatch({ type: UNSET_LOADING })
      await app.socketConnect(
        dispatch,
        app.currentUserRes.data._id,
        app.currentUserRes.data.displayName
      )
    }

    await dispatch({ type: UNSET_LOADING })
    return next(action)
  } catch (e) {}
}

export default initializeMiddleware
