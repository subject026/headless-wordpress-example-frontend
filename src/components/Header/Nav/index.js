import React from "react";

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../../context/GlobalContextProvider";
import { useSiteMenuData } from "../../../hooks/useSiteMenuData";

import { NavEl, NavList, NavToggle } from "./nav.css";
import NavItemWithSub from "./NavItemWithSub";
import NavItem from "./NavItem";

const Nav = () => {
  const headerMenu = useSiteMenuData();
  const dispatch = React.useContext(GlobalDispatchContext);
  const state = React.useContext(GlobalStateContext);

  const { navIsOpen } = state;

  return (
    <NavEl>
      <NavToggle
        onClick={() => {
          dispatch({ type: navIsOpen ? "NAV_CLOSE" : "NAV_OPEN" });
        }}
      >
        Toggle
      </NavToggle>
      <NavList navIsOpen={navIsOpen}>
        {headerMenu.menuItems.nodes.map(item => {
          if (item.childItems.nodes.length) {
            return (
              <NavItemWithSub
                key={`navItemWithSub__${item.label}`}
                handleFocus={() => dispatch({ type: "NAV_FOCUS" })}
                handleBlur={() => dispatch({ type: "NAV_BLUR" })}
                item={item}
              />
            );
          } else if (item.parentDatabaseId === 0) {
            return (
              <NavItem
                handleFocus={() => dispatch({ type: "NAV_FOCUS" })}
                handleBlur={() => dispatch({ type: "NAV_BLUR" })}
                key={`navLink__${item.path}`}
                item={item}
              />
            );
          } else return null;
        })}
      </NavList>
    </NavEl>
  );
};

export default Nav;
