import React from "react";

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../../context/GlobalContextProvider";
import { useSiteMenuData } from "../../../hooks/useSiteMenuData";

import { NavEl, NavList, NavToggle, Outer, Inner } from "./nav.css";
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
        tabIndex="-1"
        onClick={() => {
          dispatch({ type: navIsOpen ? "NAV_CLOSE" : "NAV_OPEN" });
        }}
      >
        <svg width="24" height="24">
          <path d="M3 8V6h18v2H3zm0 5h18v-2H3v2zm0 5h18v-2H3v2z" />
        </svg>
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
