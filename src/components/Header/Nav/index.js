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

  // const menuItems = headerMenu.menuItems.nodes.reduce((acc, item) => {
  //   if (item.childItems.nodes.length) {
  //     acc.push(child.label);
  //   } else {
  //     acc.push(child.label);
  //   }
  //   return acc;
  // }, []);

  console.log("\n\n\n", headerMenu.menuItems.nodes);

  // React.useEffect(() => {
  //   const subNav = menuItems.reduce((acc, val) => {
  //     console.log("val: ", val)
  //   }, {})
  //   // setNavState(state => {
  //   //   return {
  //   //     ...state,
  //   //     [item.label]: false
  //   //   }
  //   // })
  // }, []);

  const handleFocus = () => {
    console.log("focussssssssssss");
    dispatch({ type: "NAV_FOCUS" });
  };

  const handleBlur = () => {
    dispatch({ type: "NAV_BLUR" });
  };

  const { navIsOpen } = state;

  return (
    <NavEl>
      <NavToggle onClick={() => dispatch({ type: "TOGGLE_NAV" })}>
        Toggle
      </NavToggle>
      <NavList navIsOpen={navIsOpen}>
        {headerMenu.menuItems.nodes.map(item => {
          console.log(item);
          if (item.childItems.nodes.length) {
            console.log("item with children: ", item);
            return (
              <NavItemWithSub
                key={`navItemWithSub__${item.label}`}
                handleFocus={handleFocus}
                handleBlur={handleBlur}
                item={item}
              />
            );
          } else if (item.parentDatabaseId === 0) {
            console.log(
              "item.parentDatabaseId == 0: ",
              item.parentDatabaseId === 0,
              item
            );
            return (
              <NavItem
                handleFocus={handleFocus}
                handleBlur={handleBlur}
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
