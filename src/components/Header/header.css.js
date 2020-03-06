import styled from "styled-components";

export const Header = styled.header`
  height: ${props => props.theme.layout.headerHeight};
  color: #202020;
`;

export const HeaderInner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SiteTitle = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const Nav = styled.nav`
  margin: 0;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 10;
  li {
    display: block;
    margin: 0;
  }
  a {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 20px;
  }
  @media (min-width: 600px) {
    position: static;
    height: 100%;
    ul {
      list-style-type: none;
      height: 100%;
    }
    li {
      display: inline-block;
      height: 100%;
    }
  }
`;
