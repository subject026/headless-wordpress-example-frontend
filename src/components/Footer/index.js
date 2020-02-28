import React from "react";

import Footer, { FooterInner } from "./footer.css.js";
import Wrapper from "../util/Wrapper.js";

export default () => {
  return (
    <Footer>
      <Wrapper>
        <FooterInner>
          <span>Here is a footer</span>
        </FooterInner>
      </Wrapper>
    </Footer>
  );
};
