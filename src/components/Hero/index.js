import React from "react";
import { Transition } from "react-transition-group";

import { Hero, HeroInner, H1, H3 } from "./hero.css.js";
import Wrapper from "../../util/styled/Wrapper";

export default props => {
  console.log(props);
  const { main_text, secondary_text, background_image } = props;
  // const { fluid } = background_image.imageFile.childImageSharp;

  return (
    <Hero>
      {/* <Responsive> */}
      <Wrapper>
        <HeroInner>
          <section>
            <Transition in={true} timeout={0} appear={true}>
              {state => {
                return (
                  <>
                    <H1 state={state}>{main_text}</H1>
                    <H3 state={state}>{secondary_text}</H3>
                  </>
                );
              }}
            </Transition>
          </section>
        </HeroInner>
      </Wrapper>
      {/* </Responsive> */}
    </Hero>
  );
};
