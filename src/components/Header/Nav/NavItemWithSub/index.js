import React from 'react'
import { Link } from "gatsby";

import { ListItem,
  SubNavListEl,
  SubNavItem } from '../nav.css';


const NavItemWithSub = ({item}) => {
  // const state = React.useContext(GlobalStateContext);
  const[navState, setNavState] = React.useState({
    focusedLinks: 0,
    isOpen: false
  });

  const handleLinkFocus = e => { 
    setNavState(state => {
      return {
        ...state,
        focusedLinks: state.focusedLinks + 1,
        isOpen: true
      }
    })    
  }

  const handleLinkBlur = () => {
    setNavState(state => {
      const focusedLinks = state.focusedLinks - 1;
      return {
      ...state,
        focusedLinks,
        isOpen: focusedLinks < 1 ? false : true
      }
    }) 
  }

  const handleLabelMouseEnter = e => {
    const label = e.target.textContent.toLowerCase();
    setNavState(state => {
      return {
        ...state,
        isOpen: true
      }
    })
  }

  const handleLabelMouseLeave = e => {
    const label = e.target.textContent.toLowerCase();

    setNavState(state => {        
      return {
        ...state,
        isOpen: state.focusedLinks < 1 ? false : true
      }
    })
  }


  const {isOpen} = navState;  

  return (
    <ListItem key={`navLink__${item.path}`} onMouseEnter={handleLabelMouseEnter} onMouseLeave={handleLabelMouseLeave}>
      <span>{item.label}</span>
      <SubNavListEl subNavIsOpen={isOpen}>
        {item.childItems.nodes.map(child => (
          <SubNavItem key={`subNavKey_${child.path}`}>
            <Link onFocus={handleLinkFocus} onBlur={handleLinkBlur} to={child.path}>{child.label}</Link>
          </SubNavItem>))}
      </SubNavListEl>
    </ListItem>
  )
}

export default NavItemWithSub;