import React from "react";
import { Transition } from "react-transition-group";

import { Hero, HeroInner, H1, H3, StyledBackgroundImage } from "./hero.css.js";
import Wrapper from "../../util/styled/Wrapper";

export default props => {
  console.log("booooo: ", props.data);
  const { imgSrc, description, mainText, subText } = props.data;
  // const { fluid } = background_image.imageFile.childImageSharp;

  return (
    <Hero>
      {/* <Responsive> */}
      <Wrapper>
        <HeroInner>
          <StyledBackgroundImage src={imgSrc} />
          <Transition in={true} timeout={0} appear={true}>
            {state => {
              return (
                <>
                  <H1 state={state}>{mainText}</H1>
                  <H3 state={state}>{subText}</H3>
                </>
              );
            }}
          </Transition>
        </HeroInner>
      </Wrapper>
      {/* </Responsive> */}
    </Hero>
  );
};
