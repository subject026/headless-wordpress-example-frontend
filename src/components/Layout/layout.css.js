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
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0, 0.7);
  ${({isVisible}) => {
    if (isVisible) return css`
    
    `;
    return css`
      transform: translateX(100%);
    `;
  }}
`;