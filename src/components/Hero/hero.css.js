import styled from "styled-components";
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
`;

export const HeroInner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
