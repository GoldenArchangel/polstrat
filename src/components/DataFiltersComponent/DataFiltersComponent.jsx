import React, { useEffect } from "react"
import { SelectButton } from "primereact/selectbutton"
import { useSelector, useDispatch } from "react-redux"
import { setSortFilters } from "../../store/actions/components"
import SpinnerComponent from "../elements/SpinnerComponent"
import DataFiltersWrapper from "./DataFiltersWrapper"

const DataFiltersComponent = ({ props, data }) => {
  const dispatch = useDispatch()

  const { sortFilters, autoLoadReady } = useSelector(state => state.app)

  useEffect(() => dispatch(setSortFilters("dateDesc")), [dispatch])

  return autoLoadReady ? (
    <DataFiltersWrapper>
      <div className="order-description">
        {sortFilters === "nameAsc" ? "Name Ascending" : null}
        {sortFilters === "nameDesc" ? "Name Descending" : null}
        {sortFilters === "dateDesc" ? "Most Recent" : null}
        {sortFilters === "dateAsc" ? "Older" : null}
      </div>
      <div className="buttons">
        <SelectButton
          value={sortFilters}
          options={[
            {
              icon: "pi pi-calendar-plus",
              value: "dateDesc",
              disabled: sortFilters === "dateDesc",
            },
            {
              icon: "pi pi-calendar-minus",
              value: "dateAsc",
              disabled: sortFilters === "dateAsc",
            },
            {
              icon: "pi pi-sort-alpha-down",
              value: "nameAsc",
              disabled: sortFilters === "nameAsc",
            },
            {
              icon: "pi pi-sort-alpha-up-alt",
              value: "nameDesc",
              disabled: sortFilters === "nameDesc",
            },
          ]}
          onChange={e => dispatch(setSortFilters(e.value))}
          itemTemplate={option => <i className={option.icon}></i>}
        />
      </div>
    </DataFiltersWrapper>
  ) : (
    <SpinnerComponent type="small" />
  )
}

export default DataFiltersComponent
