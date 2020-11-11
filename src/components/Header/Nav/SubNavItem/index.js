import React from "react";
import styled from "styled-components";

import Link from "../../../Link";

const NavItemStyled = styled.li`
  display: block;
  padding-top: 20px;
`;

const NavItem = ({ child, handleFocus, handleBlur }) => {
  return (
    <NavItemStyled>
      <Link handleFocus={handleFocus} onBlur={handleBlur} to={child.path}>
        {child.label}
      </Link>
    </NavItemStyled>
  );
};

export default NavItem;
