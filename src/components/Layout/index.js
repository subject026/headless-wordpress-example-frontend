import React from "react";
import { ThemeProvider } from "styled-components";

import Theme from "./theme.css.js";
import Globals from "./globals.css.js";
import Header from "../Header";
import Main from "./main.css.js";
import Footer from "../Footer/index.js";

export default ({ children }) => {
  return (
    <>
      <Globals />
      <ThemeProvider theme={Theme}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </ThemeProvider>
    </>
  );
};
