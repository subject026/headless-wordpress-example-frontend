import styled, { css } from "styled-components";
import BackgroundImage from "gatsby-background-image";

export const Hero = styled.section`
  margin: 0;
  height: 300px;
  color: black;
  h1 {
    font-size: 60px;
    margin-bottom: 60px;
  }
`;

export const StyledBackgroundImage = styled(BackgroundImage)`
  height: 100%;
  /* opacity: 0; */
  transition: 0.5s;
  /* ${({ state }) => {
    let styles;
    switch (state) {
      case "entering":
        styles = "opacity: 0;";
        console.log("\n\nstate: ", state);
        console.log("\n\ncss: ", styles);
        return styles;
      case "entered":
        styles = "opacity: 1;";
        console.log("\n\nstate: ", state);
        console.log("\n\ncss: ", styles);
        return styles;
      case "exiting":
        styles = "opacity: 1;";
        console.log("\n\nstate: ", state);
        console.log("\n\ncss: ", styles);
        return styles;
      case "exited":
        styles = "opacity: 0;";
        console.log("\n\nstate: ", state);
        console.log("\n\ncss: ", styles);
        return styles;
      default:
        return null;
    }
  }} */
`;

export const HeroInner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const H1 = styled.h1`
  /* opacity: 0;
  transition: opacity 800ms ease-in;
  ${({ state }) => {
    switch (state) {
      case "entering":
        return css`
          opacity: 0;
        `;
      case "entered":
        return css`
          opacity: 1;
        `;
      case "exiting":
        return css`
          opacity: 1;
        `;
      case "exited":
        return css`
          opacity: 0;
        `;
      default:
        return null;
    }
  }} */
`;
export const H3 = styled.h1``;
