import React, { useRef, useEffect } from "react"
import HubHeaderWrapper from "./HubHeaderWrapper"
import polHubLogo from "../../../assets/images/polhub-white.png"
import { menuItems, userMenuItems } from "./items"
import { useDispatch, useSelector } from "react-redux"
import { deauthenticate } from "../../../store/actions/authentication"
import { connectionNotificationsNew } from "../../../store/actions/userConnections"
import { Link } from "react-router-dom"
import { Menu } from "primereact/menu"
import { Button } from "primereact/button"
import { confirmDialog } from "primereact/confirmdialog"

const HubHeaderComponent = ({ props }) => {
  const dispatch = useDispatch()
  const { current } = useSelector(state => state.user)
  const menu = useRef(null)

  const {
    user: {
      connection: { newNotifications },
    },
  } = useSelector(state => state)

  useEffect(() => dispatch(connectionNotificationsNew()), [dispatch])

  const showConfirm = () => {
    confirmDialog({
      message: " Are you sure you want to logout?",
      header: "Logout",
      accept: () => dispatch(deauthenticate()),
    })
  }

  const start = (
    <Link to="/">
      <div className="header-logo">
        <img alt="logo" src={polHubLogo}></img>
        <div className="header-title">
          <h3 className="share-tech-mono">Polstrat</h3>
          <h5 className="share-tech-mono primary">Community Hub</h5>
        </div>
      </div>
    </Link>
  )

  const items = menuItems(
    props,
    showConfirm,
    current.displayName,
    newNotifications
  )
  const itemsUser = userMenuItems(props, showConfirm)

  const end = (
    <div className="user-info card">
      <Menu model={itemsUser} popup ref={menu} id="popup_menu" />

      <Button
        label={current.displayName}
        icon="pi pi-angle-down"
        onClick={event => menu.current.toggle(event)}
        aria-controls="popup_menu"
        aria-haspopup
        iconPos="right"
        className="p-button-outlined name-display"
      />
    </div>
  )

  return <HubHeaderWrapper model={items} start={start} end={end} />
}

export default HubHeaderComponent
