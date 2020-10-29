import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavItemStyled = styled.li`
  display: block;
  padding-top: 20px;
`;

const NavItem = ({ child, handleFocus, handleBlur }) => {
  return (
    <NavItemStyled>
      <Link onFocus={handleFocus} onBlur={handleBlur} to={child.path}>
        {child.label}
      </Link>
    </NavItemStyled>
  );
};

export default NavItem;
