import BadgeComponent from "../../elements/BadgeComponent"

export const userMenuItems = (props, showConfirm) => {
  return [
    {
      label: "My Profile",
      className: "share-tech-mono",
      icon: "pi pi-fw pi-id-card",
      command: e => props.history.push("/hub/profile"),
    },
    {
      label: "Edit",
      className: "share-tech-mono",
      icon: "pi pi-fw pi-user-edit",
      command: e => props.history.push("/hub/profile/edit"),
    },
    {
      label: "Settings",
      className: "share-tech-mono",
      icon: "pi pi-fw pi-cog",
      command: e => props.history.push("/hub/profile/settings"),
    },
    {
      separator: true,
    },
    {
      label: "Logout",
      className: "share-tech-mono",
      icon: "pi pi-fw pi-sign-out",
      command: showConfirm,
    },
  ]
}

export const menuItems = (props, showConfirm, username, newNotifications) => {
  return [
    {
      label: "Dashboard",
      className: "share-tech-mono",
      icon: "pi pi-fw pi-th-large",
      command: e => props.history.push("/hub/dashboard"),
    },

    // SEARCH

    {
      label: "Search",
      className: "share-tech-mono",
      icon: "pi pi-fw pi-search",
      items: [
        {
          label: "Users",
          icon: "pi pi-fw pi-users",
          command: e => props.history.push("/hub/search/users"),
        },
        {
          label: "Communities",
          icon: "pi pi-fw pi-briefcase",
          command: e => props.history.push("/hub/search/communities"),
        },
      ],
    },

    // FRIENDS

    {
      label: (
        <>
          Friends{" "}
          {newNotifications ? (
            <BadgeComponent
              overlay={"true"}
              top="2px"
              right="28px"
              value={newNotifications}
            ></BadgeComponent>
          ) : null}
        </>
      ),
      className: "share-tech-mono",
      icon: "pi pi-fw pi-users",
      items: [
        {
          label: "My Friends",
          icon: "pi pi-fw pi-users",
          command: e => props.history.push("/hub/friends"),
        },
        {
          label: (
            <>
              Requests{" "}
              {newNotifications ? (
                <BadgeComponent value={newNotifications}></BadgeComponent>
              ) : null}
            </>
          ),
          icon: "pi pi-fw pi-user-plus",
          command: e => props.history.push("/hub/friends/requests"),
        },
        {
          label: "Blocked",
          icon: "pi pi-fw pi-ban",
          command: e => props.history.push("/hub/friends/blocked"),
        },
      ],
    },

    // COMMUNITY

    {
      label: "Community",
      className: "share-tech-mono",
      icon: "pi pi-fw pi-briefcase",
      items: [
        {
          label: "My Community",
          icon: "pi pi-fw pi-briefcase",
          command: e => props.history.push("/hub/community"),
        },
        {
          separator: true,
        },
        {
          label: "Settings",
          icon: "pi pi-fw pi-cog",
        },
      ],
    },

    // MESSAGES

    {
      label: "Messages",
      className: "share-tech-mono",
      icon: "pi pi-fw pi-envelope",
      items: [
        {
          label: "Inbox",
          icon: "pi pi-fw pi-inbox",
          command: e => props.history.push("/hub/messages"),
        },
        {
          label: "New",
          icon: "pi pi-fw pi-plus-circle",
        },
      ],
    },

    // USER INFO (ONLY IN TABLET/MOBILE)
    { separator: true },

    {
      label: username,
      icon: "pi pi-fw pi-user",
      className: "user-info-mobile share-tech-mono",
      items: [
        {
          label: "My Profile",
          className: "share-tech-mono",
          icon: "pi pi-fw pi-id-card",
          command: e => props.history.push("/hub/profile"),
        },
        {
          label: "Edit",
          className: "share-tech-mono",
          icon: "pi pi-fw pi-user-edit",
          command: e => props.history.push("/hub/profile/edit"),
        },
        {
          label: "Settings",
          className: "share-tech-mono",
          icon: "pi pi-fw pi-cog",
          command: e => props.history.push("/hub/profile/settings"),
        },
        {
          separator: true,
        },
        {
          label: "Logout",
          className: "share-tech-mono",
          icon: "pi pi-fw pi-sign-out",
          command: showConfirm,
        },
      ],
    },
  ]
}
