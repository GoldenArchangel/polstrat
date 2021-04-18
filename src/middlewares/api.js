import { API_CALL, SET_REQUEST } from "../store/types"

const apiMiddleware = api => ({
  dispatch,
  getState,
}) => next => async action => {
  if (action.type !== API_CALL) {
    return next(action)
  }

  try {
    // start request...
    const response = await api.request(action.payload)

    // if we dont have response return it
    if (!response || typeof response.data === "undefined") {
      await dispatch({
        type: SET_REQUEST,
        payload: {
          response: response,
        },
      })

      return next(action)
    }

    // If we have an access token let store it
    if (
      !response.data.error &&
      (response.data.access || response.data.refresh)
    ) {
      api.setTokens(response.data.access, response.data.refresh)
    }

    // If access token have expired
    else {
      // if is expired
      if (
        response.data.error &&
        response.data.error.access &&
        response.data.error.expired
      ) {
        // Lets get another access token
        await api.renewAccess()

        // if we have a renew response, this means that we have a renew
        if (api.renewResponse && api.renewResponse.data.access) {
          // let store the tokens
          api.setTokens(api.renewResponse.data.access)

          // Lets try again with a renewed token
          const refreshedResponse = await api.request(
            action.payload,
            api.renewResponse.data.access
          )

          if (
            api.renewResponse.data.error ||
            (refreshedResponse && refreshedResponse.data.error)
          ) {
            api.clearUser(dispatch, true)
            await api.socketConnect()
            return next(action)
          }

          await dispatch({
            type: SET_REQUEST,
            payload: {
              response: refreshedResponse,
            },
          })

          return next(action)
        } else {
          // this means that we have a error renewing the refresh token
          api.clearUser(dispatch, true)
          await api.socketConnect()
          return next(action)
        }
      }

      // if doesnt exist or wasnt found
      if (
        response.data.error &&
        (response.data.error.empty ||
          response.data.error.id ||
          response.data.error.notfound)
      ) {
        // let reset the user and logout
        api.clearUser(dispatch, true)
        await api.socketConnect()
        return next(action)
      }
    }

    await dispatch({
      type: SET_REQUEST,
      payload: {
        response: response,
      },
    })

    return next(action)
  } catch (e) {
    console.log(e)
  }
}

export default apiMiddleware
