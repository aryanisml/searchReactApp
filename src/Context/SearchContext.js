import { createContext,useContext, useReducer } from "react";
export const SearchContext = createContext();

export const SearchContextProvider = ({ initialState, reducer, children }) => {
  return (
    <>
      <SearchContext.Provider value={useReducer(reducer, initialState )}>
        {children}
      </SearchContext.Provider>
    </>
  );
};

export const useStateValue = () => useContext(SearchContext);
