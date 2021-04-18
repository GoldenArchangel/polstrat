import React, { useState } from "react"
import { TabMenu } from "primereact/tabmenu"
import styled from "styled-components"

const TabMenuWrapper = styled(TabMenu)`
  li {
    width: 80px;

    @media screen and (min-width: 420px) {
      width: 120px;
    }

    @media screen and (min-width: 768px) {
      width: initial;
    }
  }

  .p-menuitem-icon {
    margin-right: 0px !important;
    margin: auto !important;
    display: block !important;
    font-size: 23px;

    @media screen and (min-width: 768px) {
      display: initial;
      margin: initial;
      margin-right: 0.5em !important;
      font-size: 18px;
    }
  }

  .p-menuitem-text {
    display: none;
    visibility: hidden;

    @media screen and (min-width: 768px) {
      display: initial;
      visibility: visible;
    }
  }

  a {
    background: none !important;
    font-size: 14px;

    &:not(.p-disabled):focus {
      box-shadow: 0 0 0 0px #a7d8a9 !important;
    }
  }
`

export const TabMenuComponent = ({ items, initialActiveItem }) => {
  const [, setActiveItem] = useState(null)

  return (
    <TabMenuWrapper
      model={items}
      activeItem={initialActiveItem}
      onTabChange={e => setActiveItem(e.value)}
    />
  )
}

export default TabMenuComponent
