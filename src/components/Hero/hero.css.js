import styled, { css } from "styled-components";

export const Hero = styled.section`
  margin: 0;
  height: 300px;
  color: black;
  h1 {
    font-size: 60px;
    margin-bottom: 60px;
  }
`;

export const StyledBackgroundImage = styled.img`
  height: 100%;
`;

export const HeroInner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const H1 = styled.h1`
  text-shadow: 0px 0px 7px rgba(20, 20, 20, 0.2);
  opacity: 0;
  transform: translateX(10px);
  transition: opacity 0.8s cubic-bezier(0.42, 0, 0.08, 1.01),
    transform 0.8s cubic-bezier(0.42, 0, 0.08, 1.01);
  ${({ state }) => {
    switch (state) {
      case "entering":
        return css`
          opacity: 0;
        `;
      case "entered":
        return css`
          opacity: 1;
          transform: translateX(0);
        `;
      case "exiting":
        return css`
          opacity: 0;
        `;
      case "exited":
        return css`
          opacity: 0;
        `;
      default:
        return null;
    }
  }}
`;

export const H3 = styled.h3`
  text-shadow: 0px 0px 7px #000000;
  opacity: 0;
  transform: translateX(10px);
  transition: opacity 0.8s cubic-bezier(0.42, 0, 0.08, 1.01),
    transform 0.8s cubic-bezier(0.42, 0, 0.08, 1.01);
  transition-delay: 0.1s;
  ${({ state }) => {
    switch (state) {
      case "entering":
        return css`
          opacity: 0;
        `;
      case "entered":
        return css`
          opacity: 1;
          transform: translateX(0);
        `;
      case "exiting":
        return css`
          opacity: 0;
        `;
      case "exited":
        return css`
          opacity: 0;
        `;
      default:
        return null;
    }
  }}
`;
