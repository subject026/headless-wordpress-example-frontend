import React from "react";

import { Hero, HeroInner } from "./hero.css.js";
import Wrapper from "../../util/styled/Wrapper";

export default ({ mainHeading, subHeading }) => {
  return (
    <Hero>
      <Wrapper>
        <HeroInner>
          <section>
            <h1>{mainHeading}</h1>
            <h3>{subHeading}</h3>
          </section>
        </HeroInner>
      </Wrapper>
    </Hero>
  );
};
