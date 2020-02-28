import React from "react";

import TextContent from "./textContent.css";
import Wrapper from "../util/Wrapper";

export default ({ children }) => {
  return (
    <TextContent>
      <Wrapper>{children}</Wrapper>
    </TextContent>
  );
};
