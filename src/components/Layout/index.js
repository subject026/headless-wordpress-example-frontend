import React from "react";
import { ThemeProvider } from "styled-components";

import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "../../context/GlobalContextProvider";

import Theme from "./theme.css.js";
import Globals from "./globals.css.js";
import Header from "../Header";
import { Main, Overlay } from "./layout.css.js";
import Footer from "../Footer/index.js";

export default ({ children }) => {
  const state = React.useContext(GlobalStateContext);
  const dispatch = React.useContext(GlobalDispatchContext);
  console.log("layout state: ", state);
  const { navIsOpen } = state;
  return (
    <>
      <Globals />
      <ThemeProvider theme={Theme}>
        <Overlay
          onClick={() => dispatch({ type: "NAV_CLOSE" })}
          isVisible={navIsOpen}
        />
        <Header />
        <Main>{children}</Main>
        <Footer />
      </ThemeProvider>
    </>
  );
};
