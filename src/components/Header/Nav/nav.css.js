import styled from "styled-components";

export const NavEl = styled.nav`
  margin: 0;
  @media (min-width: 600px) {
    position: static;
    height: 100%;
  }
`;

export const NavList = styled.ul`
  margin: 0;
  padding: 60px 32px;
  background-color: #f5f5f5;
  list-style-type: none;
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 11;
  transform: ${({ navIsOpen }) =>
    navIsOpen ? "translateX(0)" : "translateX(100%)"};
  @media (min-width: 600px) {
    position: static;
    transform: translateX(0);
  }
`;

export const ListItem = styled.li`
  display: block;
  margin: 0;
  padding: 0;
  span {
    display: inline-block;
    padding: 8px 16px;
  }
  @media (min-width: 600px) {
    position: relative;
    span {
      display: flex;
      align-items: center;
      height: 100%;
    }
    a {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 8px 16px;
    }
    display: inline-block;
    height: 100%;
  }
`;

export const NavToggle = styled.button`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 12;
  @media (min-width: 600px) {
    display: none;
  }
`;

export const SubNavListEl = styled.ul`
  max-width: 400px;
  padding: 0 0 0 16px;
  margin: 0;
  @media (min-width: 600px) {
    position: absolute;
    transform: ${({ subNavIsOpen }) =>
      subNavIsOpen ? "translateY(0px)" : "translateY(-1000px)"};
    transition: opacity 0.2s linear;
    opacity: ${({ subNavIsOpen }) => (subNavIsOpen ? 1 : 0)};
    z-index: ${({ subNavIsOpen }) => (subNavIsOpen ? "auto" : -10)};
  }
`;

export const SubNavItem = styled.li`
  display: block;
  width: 100%;
  margin: 0;
  a {
    display: inline-block;
    padding: 8px 20px;
  }

  @media (min-width: 600px) {
    a {
      white-space: nowrap;
      display: inline-block;
    }
  }
`;
