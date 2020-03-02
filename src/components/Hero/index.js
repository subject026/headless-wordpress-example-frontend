import React from "react";

import { Hero, HeroInner, StyledBackgroundImage } from "./hero.css.js";
import Wrapper from "../../util/styled/Wrapper";

export default ({ mainHeading, subHeading, background_image }) => {
  return (
    <Hero>
      <StyledBackgroundImage
        fluid={background_image.imageFile.childImageSharp.fluid}
      >
        <Wrapper>
          <HeroInner>
            <section>
              <h1>{mainHeading}</h1>
              <h3>{subHeading}</h3>
            </section>
          </HeroInner>
        </Wrapper>
      </StyledBackgroundImage>
    </Hero>
  );
};
