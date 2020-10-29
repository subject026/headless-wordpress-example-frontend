import React from "react";

import Nav from './Nav'
import { Header, HeaderInner, SiteTitle } from "./header.css";
import Wrapper from "../../util/styled/Wrapper";

export default () => { 
  return (
    <Header>
      <Wrapper>
        <HeaderInner>
          <SiteTitle>LOGO?!</SiteTitle>       
          <Nav />            
        </HeaderInner>
      </Wrapper>
    </Header>
  );
};
