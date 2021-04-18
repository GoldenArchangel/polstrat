import { SET_LOADING, UNSET_LOADING, SET_SORT_FILTERS } from "../types"

export const setLoading = status => {
  return async (dispatch, getState) => {
    try {
      const {
        app: { loading },
      } = await getState()

      if (status) {
        if (!loading) {
          await dispatch({ type: SET_LOADING })
        }
      } else {
        if (loading) {
          await dispatch({ type: UNSET_LOADING })
        }
      }
    } catch (error) {}
  }
}

export const setSortFilters = sort => {
  return {
    type: SET_SORT_FILTERS,
    payload: sort,
  }
}
