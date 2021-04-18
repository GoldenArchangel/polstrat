import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { checkAuthentication } from "../../store/actions/authentication"

const NotFoundPage = props => {
  const dispatch = useDispatch()
  const { authenticated } = useSelector(state => state.app)

  useEffect(() => {
    if (!authenticated) {
      dispatch(checkAuthentication())
    }
  }, [dispatch, authenticated])

  const page404 = <h1>404: NOT FOUND</h1>

  return page404
}

export default NotFoundPage
