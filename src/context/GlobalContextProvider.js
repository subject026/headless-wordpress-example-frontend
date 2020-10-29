import React from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  theme: "light",
}

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_NAV": {
      return {
        ...state,
        navIsOpen: !state.navIsOpen,
      }
    }
    case "OPEN_NAV": {
      return {
        ...state,
        navIsOpen: true,
      }
    }
    case "CLOSE_NAV": {
      return {
        ...state,
        navIsOpen: false,
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