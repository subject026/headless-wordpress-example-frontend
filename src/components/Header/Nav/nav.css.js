import styled, { css } from "styled-components";

export const NavEl = styled.nav`
  margin: 0;
  @media (min-width: 600px) {
    position: static;
    height: 100%;
  }
`;

export const NavToggle = styled.button`
  ${({ subNavIsOpen, theme }) => {
    return css`
      position: fixed;
      right: ${theme.layout.base2};
      top: ${theme.layout.base2};
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 12;
      border: none;
      background: none;
      &:hover {
        cursor: pointer;
        path {
          fill: ${theme.colors.black};
        }
      }
      path {
        fill: ${theme.colors.black2};
      }
      @media (min-width: 600px) {
        display: none;
      }
    `;
  }};
`;

export const NavList = styled.ul`
  ${({ theme, navIsOpen }) => {
    return css`
      margin: 0;
      padding: ${theme.layout.base4};
      background-color: #f5f5f5;
      list-style-type: none;
      height: 100%;
      position: fixed;
      right: 0;
      top: 0;
      z-index: 11;
      overflow-y: scroll;
      transform: ${navIsOpen ? "translateX(15px)" : "translateX(100%)"};
      transition: ${theme.transition.nav};
      @media (min-width: 600px) {
        position: static;
        transform: translateX(0);
        padding: 0;
        overflow: visible;
      }
    `;
  }}
`;

export const ListItem = styled.li`
  ${({ theme }) => {
    return css`
      display: block;
      margin: 0;
      padding 0;
      span {
        display: inline-block;
        padding: ${theme.layout.base1} ${theme.layout.base2};
      }
      
      @media (min-width: 600px) {
        position: relative;
        span {
          display: flex;
          align-items: center;
          height: 100%;
        }        
        display: inline-block;
        height: 100%;
      }
    `;
  }}
`;

export const SubNavListEl = styled.ul`
  ${({ subNavIsOpen, theme }) => {
    return css`
      max-width: 400px;
      padding: 0 0 ${theme.layout.base2} ${theme.layout.base2};
      margin: 0;
      @media (min-width: 600px) {
        position: absolute;
        transform: ${({ subNavIsOpen }) =>
          subNavIsOpen ? `translateY(0px)` : `translateY(-1000px)`};
        transition: opacity 0.2s linear;
        opacity: ${subNavIsOpen ? 1 : 0};
        padding: 0 0 ${theme.layout.base2} 0;
      }
    `;
  }}
`;

export const SubNavItem = styled.li`
  ${({ subNavIsOpen, theme }) => {
    return css`
      display: block;
      width: 100%;
      margin: 0;
      a {
        display: inline-block;
        padding: ${theme.layout.base2} ${theme.layout.base2};
        color: red;
      }

      @media (min-width: 600px) {
        a {
          white-space: nowrap;
          display: inline-block;
        }
      }
    `;
  }}
`;
