import React, { createContext, useContext, useReducer } from "react";
//this is data layer
export const DataLayerContext = createContext();

//BUILD a provider
export const DataLayer = ({ reducer, initialState, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

export const useStateValue = () => useContext(DataLayerContext);
