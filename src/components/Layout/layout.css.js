import styled, { css } from "styled-components";

export const Main = styled.main`
  min-height: calc(
    100vh -
      (
        ${props => props.theme.layout.footerHeight} +
          ${props => props.theme.layout.headerHeight}
      )
  );
  margin: 0;
`;

export const Overlay = styled.div`
  ${({ theme, isVisible }) => {
    return css`
      height: 100vh;
      width: 100vw;
      position: fixed;
      left: 0;
      top: 0;
      margin: 0;
      background-color: rgba(30, 30, 30, 0.8);
      opacity: ${isVisible ? 1 : 0};
      transition: opacity ${theme.transition.nav};
      @media (min-width: 600px) {
        display: none;
      }
    `;
  }}
`;
