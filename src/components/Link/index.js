import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled, { css } from "styled-components";

const NewLink = styled(GatsbyLink)`
  ${({ theme }) => {
    return css`
      padding-top: 20px;
      color: red;
      display: block;
      /* align-items: center; */
      height: 100%;
      padding: ${theme.layout.base2} ${theme.layout.base2};
    `;
  }}
`;

const Link = ({ to, handleFocus, handleBlur, children }) => {
  return (
    <NewLink onFocus={handleFocus} onBlur={handleBlur} to={to}>
      {children}
    </NewLink>
  );
};

export default Link;
