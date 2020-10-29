import React from 'react'

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../../context/GlobalContextProvider"
import { useSiteMenuData } from "../../../hooks/useSiteMenuData";

import { NavEl,
  NavList,
  NavToggle,
  } from './nav.css';
import NavItemWithSub from './NavItemWithSub';
import NavItem from './NavItem';

const Nav = () => {
  const headerMenu = useSiteMenuData();
  const dispatch = React.useContext(GlobalDispatchContext)
  const state = React.useContext(GlobalStateContext);
  

  
  const childItemLabels = headerMenu.menuItems.nodes.reduce((acc, item) => {
    if (item.childItems.nodes.length) {
      item.childItems.nodes.forEach(child => {
        acc.push(child.label);
        
      })
    }
    return acc;
  }, []); 
  
  const menuItems = headerMenu.menuItems.nodes.filter(item => {   
    if (childItemLabels.includes(item.label)) return;
    return item;
  });
  
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


  const { navIsOpen } = state;

  return (
    <NavEl>
      <NavToggle onClick={() => dispatch({ type: "TOGGLE_NAV" })}>Toggle</NavToggle>
      <NavList navIsOpen={navIsOpen}>
        {menuItems.map((item, i) => {
          if (item.childItems.nodes.length) {            
            return (
              <NavItemWithSub item={item} />              
            );
          }              
          else {
            return (
              <NavItem key={`navLink__${item.path}`} item={item} />
            );
          }
        })}
      </NavList>
    </NavEl>
  )
}

export default Nav;