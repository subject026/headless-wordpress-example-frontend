import React from "react";
import { TransitionGroup, Transition } from "react-transition-group";

import { Hero, HeroInner, StyledBackgroundImage, H1 } from "./hero.css.js";
import Wrapper from "../../util/styled/Wrapper";

const transitionStyles = {
  entering: {
    opacity: 0,
  },
  entered: {
    opacity: 1,
  },
  exiting: {
    opacity: 0,
  },
  exited: {
    opacity: 0,
  },
};

export default ({ mainHeading, subHeading, background_image }) => {
  const [imageHasLoaded, setImageHasLoaded] = React.useState(false);

  const handleImageLoaded = () => {
    console.log("imageHasLoaded!");
    setImageHasLoaded(true);
  };

  const { fluid } = background_image.imageFile.childImageSharp;

  return (
    <Hero>
      <Transition
        appear={true}
        timeout={100}
        in={imageHasLoaded}
        style={{
          height: "100%",
        }}
      >
        {state => {
          return (
            <StyledBackgroundImage
              fluid={fluid}
              fadeIn={false}
              preserveStackingContext={true}
              onLoad={handleImageLoaded}
              style={transitionStyles[state]}
            >
              <Wrapper>
                <HeroInner data-name="heroInner">
                  <section>
                    <H1 state={state}>
                      {mainHeading} - i am {state}
                    </H1>
                    {/* <H3 state={state}>{subHeading}</H3> */}
                  </section>
                </HeroInner>
              </Wrapper>
            </StyledBackgroundImage>
          );
        }}
      </Transition>
    </Hero>
  );
};
