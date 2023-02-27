import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const clearUsers = () => dispatch({ type: "CLEAR_USERS" });
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  const contextValue = {
    ...state,
    dispatch,
    setLoading,
    clearUsers,
  };
  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
