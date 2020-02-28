import React from "react";

import { Hero, HeroInner } from "./hero.css.js";
import Wrapper from "../util/Wrapper.js";

export default ({ title }) => {
  return (
    <Hero>
      <Wrapper>
        <HeroInner>
          <h1>{title}</h1>
        </HeroInner>
      </Wrapper>
    </Hero>
  );
};
