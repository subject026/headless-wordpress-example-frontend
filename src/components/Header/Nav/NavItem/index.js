import React from 'react'
import styled from "styled-components";
import { Link } from "gatsby";


export const NavItemEl = styled.li`
  display: block;
  margin: 0;
  position: relative;
  span {
    display: inline-block;
    padding: 0 20px;
  }
  a {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 8px 16px;
  }

  @media (min-width: 600px) {  
    display: inline-block;
    height: 100%;  
  }

`;


const NavItem = ({item, handleFocus, handleBlur}) => {    
    return (
      <NavItemEl>
        <Link onFocus={handleFocus} onBlur={handleBlur} to={item.path}>{item.label}</Link>
      </NavItemEl>
    );
  
}

export default NavItem;