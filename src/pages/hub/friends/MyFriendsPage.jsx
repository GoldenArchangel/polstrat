import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  getAllConnections,
  removeConnection,
  countAllConnections,
} from "../../../store/actions/userConnections"
import { confirmDialog } from "primereact/confirmdialog"
import { FriendsCardComponent } from "../../../components/ConnectionCardComponent/FriendsCardComponent"
import AutoLoaderComponent from "../../../components/AutoLoaderComponent/AutoLoaderComponent"
import { FriendsContainerWrapper } from "./FriendsWrapper"
import DataFiltersComponent from "../../../components/DataFiltersComponent/DataFiltersComponent"
import SpinnerComponent from "../../../components/elements/SpinnerComponent"
import TexSearchComponent from "../../../components/TextSearchComponent/TextSearchComponent"

const MyFriendsPage = props => {
  const dispatch = useDispatch()
  const [, setLengthLoading] = useState(null)

  const {
    connection: { count },
  } = useSelector(state => state.user)

  useEffect(() => dispatch(countAllConnections()), [dispatch])

  return (
    <FriendsContainerWrapper>
      <div className="friends-container">
        <>
          <div className="friends-header">
            <div className="description">
              {typeof count === "number" && (
                <i className="pi pi-info-circle"></i>
              )}

              {typeof count === "number" ? (
                count ? (
                  `You have ${count} friend${count > 1 ? "s" : ""}`
                ) : (
                  "You have 0 friends"
                )
              ) : (
                <SpinnerComponent type="small" />
              )}
            </div>

            {count > 6 ? (
              <span className="secondary p-text-bold">Most recent</span>
            ) : null}
          </div>

          <div className="friends-body">
            <AutoLoaderComponent
              count={count}
              limit={4}
              action={getAllConnections}
              Component={FriendsCardComponent}
              args={{
                props,
                options: {
                  dispatch,
                  confirmDialog,
                  setLengthLoading,
                  removeConnection,
                  getAllConnections,
                },
              }}
              offset={"0px 0px 0px 0px"}
              threshold={1}
              noResultsText="Don't have any friends to show."
              searchText="Find new friends and invite
            them to join you."
            />
          </div>
        </>
      </div>
    </FriendsContainerWrapper>
  )
}

export default MyFriendsPage
