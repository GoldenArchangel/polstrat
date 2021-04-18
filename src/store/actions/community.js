import Request from "../../request"
import { setLoading } from "./components"
import { GET_COMMUNITY, GET_COMMUNITY_ERROR } from "../types"

// GET COMMUNITY

export const dispatchGetCommunity = (data, count) => {
  return async dispatch => {
    try {
      await dispatch({ type: GET_COMMUNITY, payload: { data, count } })
      await dispatch(setLoading(false))
    } catch (error) {}
  }
}

export const getCommunityError = () => {
  return async dispatch => {
    try {
      await dispatch({ type: GET_COMMUNITY_ERROR })
      await dispatch(setLoading(false))
    } catch (error) {}
  }
}

export const getCommunity = alias => {
  return async dispatch => {
    try {
      await dispatch(setLoading(true))
      const request = new Request()
      const resInfo = await request.get({ url: `/community/${alias}` })

      const resCount = await request.get({
        url: `/community/user/count/${alias}`,
      })

      if (!resInfo || !resInfo.data) {
        await dispatch(getCommunityError())
      }

      await dispatch(dispatchGetCommunity(resInfo.data, resCount.data))
    } catch (error) {
      await dispatch(getCommunityError())
    }
  }
}
