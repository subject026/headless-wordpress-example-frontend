import React from "react";
import { ThemeProvider } from "styled-components";

import {
  GlobalStateContext,
} from "../../context/GlobalContextProvider"

import Theme from "./theme.css.js";
import Globals from "./globals.css.js";
import Header from "../Header";
import {Main, Overlay} from "./layout.css.js";
import Footer from "../Footer/index.js";

export default ({ children }) => {
  const state = React.useContext(GlobalStateContext);

  const {navIsOpen} = state;
  return (
    <>
      <Globals />
      <ThemeProvider theme={Theme}>
        <Overlay isVisible={navIsOpen}/>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </ThemeProvider>
    </>
  );
};
