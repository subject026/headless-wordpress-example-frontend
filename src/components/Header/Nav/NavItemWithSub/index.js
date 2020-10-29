import React from "react";
import { Link } from "gatsby";

import { GlobalDispatchContext } from "../../../../context/GlobalContextProvider";

import { ListItem, SubNavListEl, SubNavItem } from "../nav.css";

const NavItemWithSub = ({ item }) => {
  const dispatch = React.useContext(GlobalDispatchContext);
  const [navState, setNavState] = React.useState({
    focusedLinks: 0,
    isOpen: false,
  });

  const handleLinkFocus = e => {
    dispatch({ type: "NAV_FOCUS" });
    setNavState(state => {
      console.log("sub menu focus: ", state);
      return {
        ...state,
        focusedLinks: state.focusedLinks + 1,
        isOpen: true,
      };
    });
  };

  const handleLinkBlur = () => {
    dispatch({ type: "NAV_BLUR" });
    setNavState(state => {
      console.log("sub menu blur: ", state);
      const focusedLinks = state.focusedLinks - 1;
      return {
        ...state,
        focusedLinks,
        isOpen: focusedLinks < 1 ? false : true,
      };
    });
  };

  const handleLabelMouseEnter = e => {
    setNavState(state => {
      return {
        ...state,
        isOpen: true,
      };
    });
  };

  const handleLabelMouseLeave = e => {
    setNavState(state => {
      return {
        ...state,
        isOpen: state.focusedLinks < 1 ? false : true,
      };
    });
  };

  const { isOpen } = navState;

  return (
    <ListItem
      key={`navLink__${item.path}`}
      onMouseEnter={handleLabelMouseEnter}
      onMouseLeave={handleLabelMouseLeave}
    >
      <span>{item.label}</span>
      <SubNavListEl subNavIsOpen={isOpen}>
        {item.childItems.nodes.map((child, i) => (
          <SubNavItem key={`subNavKey_${i}_${item.label + child.path}`}>
            <Link
              onFocus={handleLinkFocus}
              onBlur={handleLinkBlur}
              to={child.path}
            >
              {child.label}
            </Link>
          </SubNavItem>
        ))}
      </SubNavListEl>
    </ListItem>
  );
};

export default NavItemWithSub;
