import React from "react";
import { Transition } from "react-transition-group";

import { Hero, HeroInner, StyledBackgroundImage, H1, H3 } from "./hero.css.js";
import Wrapper from "../../util/styled/Wrapper";

export default ({ mainHeading, subHeading, background_image }) => {
  const { fluid } = background_image.imageFile.childImageSharp;

  return (
    <Hero>
      <StyledBackgroundImage fluid={fluid}>
        <Wrapper>
          <HeroInner>
            <section>
              <Transition in={true} timeout={0} appear={true}>
                {state => {
                  return (
                    <>
                      <H1 state={state}>{mainHeading}</H1>
                      <H3 state={state}>{subHeading}</H3>
                    </>
                  );
                }}
              </Transition>
            </section>
          </HeroInner>
        </Wrapper>
      </StyledBackgroundImage>
    </Hero>
  );
};
