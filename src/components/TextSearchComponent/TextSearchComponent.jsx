import React, { useState } from "react"
import TextSearchWrapper from "./TextSearchWrapper"
import Request from "../../request"

const initialState = {
  query: "",
}

const TextSearchComponent = ({ props, placeholder }) => {
  const [data, setData] = useState(initialState)
  const [filteredResults, setFilteredResults] = useState(null)

  const handleChange = e => {
    const { name, value } = e.target

    setData({ ...data, [name]: value })
  }

  const submitQuery = async query => {
    const request = new Request()

    return await request.get({
      url: `/search/text?search=${query}`,
    })
  }

  const searchQuery = event => {
    if (!event.query) {
      return
    }

    setTimeout(async () => {
      let filteredQuery

      if (!event.query.trim().length) {
        filteredQuery = []
      } else {
        const response = await submitQuery(event.query.trim())

        if (response && response.data) {
          const { users, communities } = response.data

          if (!users || !communities) {
            filteredQuery = []
          } else {
            filteredQuery = [
              ...users.map(user => {
                return { type: "user", user }
              }),
              ...communities.map(community => {
                return { type: "community", community }
              }),
            ]
          }
        }
      }

      if (filteredQuery.length < 1) {
        filteredQuery = [{ type: "empty" }]
      }

      setFilteredResults(filteredQuery)
    }, 250)
  }

  const itemTemplate = result => {
    const { type } = result

    if (type === "user") {
      const {
        user: { displayName, Community },
      } = result

      return (
        <div>
          <i className="pi pi-user"></i>{" "}
          <span className="primary">{displayName}</span>
          <span className="community">
            {typeof Community !== "undefined" ? `[${Community.tag}]` : null}
          </span>{" "}
        </div>
      )
    }

    if (type === "community") {
      const {
        community: { displayName, tag },
      } = result

      return (
        <div>
          <i className="pi pi-briefcase"></i>{" "}
          <span className="community">{`[${tag}]`}</span>
          <span className="community">{displayName}</span>
        </div>
      )
    }

    if (type === "empty") {
      return (
        <div>
          <i className="pi pi-info-circle"></i> <span>No results found.</span>
        </div>
      )
    }
  }

  const onSelect = value => {
    setData(data)
    if (value.type === "empty") {
      return
    }

    props.history.push(`/${value.type}/${value[value.type].alias}`)
  }

  const onBlur = e => {
    setData({ ...data, query: "" })
  }

  return (
    <TextSearchWrapper
      name="query"
      value={data.query}
      placeholder={
        placeholder
          ? placeholder
          : "Search by Keywords, Users and Communities..."
      }
      completeMethod={searchQuery}
      suggestions={filteredResults}
      itemTemplate={itemTemplate}
      selectedItemTemplate={itemTemplate}
      minLength={2}
      delay={300}
      onChange={e => handleChange(e)}
      onSelect={e => onSelect(e.value)}
      onBlur={e => onBlur(e)}
    />
  )
}

export default TextSearchComponent
