import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    color: #404040;
  } 

  * {
    margin: 0;
  }

  * + * {
    margin-top: 1.6rem;
  }

  p {
    max-width: 600px;
    line-height: 1.6;
  }

  h2, h3, h4, h5 {
    margin-top: 3rem;
  }

  h1 {
    font-size: 40px;
    font-weight: 200;
    color: #fff;
  }

  h3 {
    color: #fff;
  }
`;
