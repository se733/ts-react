import React, { useReducer } from "react";

interface AuthState {
  validando: boolean;
  token: null | string;
  username: string;
  nombre: string;
}

const initialState: AuthState = {
  validando: true,
  token: null,
  username: "",
  nombre: "",
};

type AuthAction = { type: "logout" };

// const authReducer = (state: AuthState,action: AuthAction):  AuthState => {

// };

export const Login = () => {
//   const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <>
      <h1>Login</h1>
      <div className="alert alert-info">Validando...</div>
      <div className="alert alert-danger">No autenticado...</div>
      <div className="alert alert-success">Autenticado</div>
      <button className="btn btn-primary">Login</button>
      &nbsp;
      <button className="btn btn-danger">Login</button>
    </>
  );
};
