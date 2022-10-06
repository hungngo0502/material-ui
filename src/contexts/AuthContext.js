import { createContext, useReducer, useEffect } from "react";

const initialState = {
  isAuthenticated: false,
  user: "",
  pass: "",
};

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        pass: action.payload.pass,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        pass: null,
      };
    default:
      return state;
  }
};

const AuthContext = createContext({ ...initialState });

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async (username, password, callback) => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user: { username }, pass: { password } },
    });
    callback();
  };

  const logout = async (callback) => {
    dispatch({ type: LOGOUT, payload: { user: "", pass: "" } });
    callback();
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
