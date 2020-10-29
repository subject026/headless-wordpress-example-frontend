import React from "react";

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const initialState = {
  theme: "light",
  navIsOpen: false,
  navFocusedLinks: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "NAV_OPEN": {
      return {
        ...state,
        navIsOpen: true,
      };
    }
    case "NAV_CLOSE": {
      return {
        ...state,
        navIsOpen: false,
      };
    }
    case "NAV_FOCUS": {
      return {
        ...state,
        navIsOpen: state.navFocusedLinks + 1 > 0 ? true : false,
        navFocusedLinks: state.navFocusedLinks + 1,
      };
    }
    case "NAV_BLUR": {
      const navFocusedLinks =
        state.navFocusedLinks - 1 < 1 ? 0 : state.navFocusedLinks - 1;
      return {
        ...state,
        navFocusedLinks,
        navIsOpen: navFocusedLinks > 0 ? true : false,
      };
    }
    default:
      throw new Error("Bad Action Type");
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalContextProvider;
