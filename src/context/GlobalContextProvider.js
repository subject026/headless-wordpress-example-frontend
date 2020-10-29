import React from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  theme: "light",
  navIsOpen: false,
  navFocusedLinks: 0
}

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_NAV": {
      return {
        ...state,
        navIsOpen: !state.navIsOpen,
      }
    }
    case "NAV_FOCUS": {
      return {
        ...state,
        navIsOpen: true,
        navFocusedLinks: state.navFocusedLinks + 1
      }
    }
    case "NAV_BLUR": {
      console.log(state)    
      const navFocusedLinks = state.navFocusedLinks - 1
      return {
        ...state,
        navFocusedLinks,
        navIsOpen: navFocusedLinks > 0 ? true : false,
      }
    }
    default:
      throw new Error("Bad Action Type")
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider