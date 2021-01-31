// setup data layer
import React, { createContext, useContext, useReducer } from 'react';

// DATA LAYER
export const StateContext = createContext();

// BUILD A PROVIDER
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// this is how we use it inside component
export const useStateValue = () => useContext(StateContext)