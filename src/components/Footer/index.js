import React from "react";

import Footer, { FooterInner } from "./footer.css.js";
import Wrapper from "../../util/styled/Wrapper";

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
