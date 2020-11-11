import React from "react";
import styled, { css } from "styled-components";
import Link from "../../../Link";

export const NavItemEl = styled.li`
  ${({ theme }) => {
    return css`
      display: block;
      margin: 0;
      position: relative;
      span {
        display: inline-block;
        padding: 0 ${theme.layout.base3};
        color: pink;
      }

      @media (min-width: 600px) {
        display: inline-block;
        height: 100%;
      }
    `;
  }}
`;

const NavItem = ({ item, handleFocus, handleBlur }) => {
  return (
    <NavItemEl>
      <Link handleFocus={handleFocus} onBlur={handleBlur} to={item.path}>
        {item.label}
      </Link>
    </NavItemEl>
  );
};

export default NavItem;
