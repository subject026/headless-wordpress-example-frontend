import React from "react";

import { Header, HeaderInner, SiteTitle, Nav } from "./header.css";
import Wrapper from "../../util/styled/Wrapper";
import { useSiteMenuData } from "../../hooks/useSiteMenuData";
import { Link } from "gatsby";

export default () => {
  const headerMenu = useSiteMenuData("Header Navigation").filter(
    menu => menu.name === "Header Navigation"
  )[0];
  return (
    <Header>
      <Wrapper>
        <HeaderInner>
          <SiteTitle>Here is a header</SiteTitle>
          <Nav>
            <ul>
              {headerMenu.menuItems.nodes.map(item => {
                const url = item.url.split(
                  "http://localhost/headless-wordpress-example.rainbowmonkey.info"
                )[1];
                return (
                  <li key={`navLink__${url}`}>
                    <Link to={url}>{item.label}</Link>
                  </li>
                );
              })}
            </ul>
          </Nav>
        </HeaderInner>
      </Wrapper>
    </Header>
  );
};
