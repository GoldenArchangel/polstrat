import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Card } from "primereact/card"
import TextSearchComponent from "../TextSearchComponent/TextSearchComponent"
import SpinnerComponent from "../elements/SpinnerComponent"
import { REFRESH_AUTOLOAD, UNSET_AUTOLOAD } from "../../store/types"
import AutoLoadWrapper from "./AutoLoadWrapper"
import { unsetAutoload } from "../../store/actions/app"
import InfiniteScroll from "react-infinite-scroll-component"

const AutoLoaderComponent = ({
  name,
  Component,
  action,
  limit,
  args,
  offset,
  threshold,
  count,
  noResultsText,
  searchText,
}) => {
  const dispatch = useDispatch()
  const [returnData, setReturnData] = useState(null)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(null)
  const [hasMore, setHasMore] = useState(true)
  const [empty, setEmpty] = useState(false)

  const { autoLoadData, autoLoadRefresh } = useSelector(state => state.app)

  // unset autoload after unmounting
  useEffect(() => () => dispatch({ type: UNSET_AUTOLOAD }), [dispatch])

  // Load data
  useEffect(() => {
    // Lets see if we have external changes on the data
    if (autoLoadRefresh && autoLoadRefresh.type === "remove") {
      return () => {
        dispatch({ type: UNSET_AUTOLOAD })
        setReturnData(null)
        setPage(1)
        setHasMore(true)
        dispatch({ type: REFRESH_AUTOLOAD, payload: null })
      }
    }

    if (!hasMore) {
      return
    }
    // if we dont have data or we have a count without data,
    //that means that data was changed and needs a refresh
    if (!Array.isArray(autoLoadData) && !returnData) {
      dispatch(action(limit, page))
      return
    }

    if (autoLoadData) {
      if (!autoLoadData.length && count < 1) {
        setReturnData([])
        setHasMore(false)
        setLoading(false)
        setEmpty(true)
        return
      }

      if (autoLoadData.length && !returnData) {
        setReturnData(autoLoadData)
        dispatch({ type: UNSET_AUTOLOAD })
        return
      }
    }

    if (page <= 1) {
      dispatch({ type: UNSET_AUTOLOAD })
      return
    }

    if (page * limit > returnData.length) {
      if (Array.isArray(autoLoadData)) {
        if (autoLoadData.length === limit) {
          const results = [...returnData, ...autoLoadData]
          setReturnData(
            results.filter(
              ({ _id }, index) =>
                !results.map(rD => rD._id).includes(_id, index + 1)
            )
          )
          dispatch({ type: UNSET_AUTOLOAD })
          setLoading(false)
        } else if (autoLoadData.length) {
          const results = [...returnData, ...autoLoadData]
          setReturnData(
            results.filter(
              ({ _id }, index) =>
                !results.map(rD => rD._id).includes(_id, index + 1)
            )
          )
          setHasMore(false)
          setLoading(false)
          return
        } else {
          setHasMore(false)
          setLoading(false)
          return
        }
      } else {
        setLoading(true)
        dispatch(action(limit, page))
        return
      }
    }
  }, [dispatch, action, autoLoadData, returnData, limit, page])

  return Array.isArray(returnData) ? (
    <AutoLoadWrapper>
      <InfiniteScroll
        dataLength={returnData.length}
        next={() => setPage(page => page + 1)}
        hasMore={hasMore}
        scrollThreshold="200px"
        loader={
          loading ? (
            <div className="load-content">
              <SpinnerComponent type="small" />
            </div>
          ) : null
        }
        endMessage={
          !empty ? (
            <div className="load-content">
              <p className="secondary">No more results</p>
            </div>
          ) : null
        }
      >
        <div className="autoload-content">
          {returnData.length ? (
            returnData.map((d, i) => {
              return <Component key={i} {...{ ...args, data: d }} />
            })
          ) : (
            <Card className="no-results">
              <div className="no-results-header">
                <h2 className="share-tech-mono">
                  <i className="pi pi-info-circle "></i>No Results
                </h2>
                <p className="primary">{noResultsText}</p>
              </div>
              <div className="no-results-body">
                <div className="description">
                  <p className="secondary">
                    <i className="pi pi-info-circle "></i>
                    {searchText}
                  </p>
                </div>
                <div className="search">
                  <TextSearchComponent {...{ props: args.props }} />
                </div>
              </div>
            </Card>
          )}
        </div>
      </InfiniteScroll>
    </AutoLoadWrapper>
  ) : (
    <SpinnerComponent type="subpage" />
  )
}

export default AutoLoaderComponent
