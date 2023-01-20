import React, { useEffect, useReducer } from "react";

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

const authReducer = (state: AuthState, action: AuthAction):  AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }
            default: return state;
    
       
    }
};


export const Login = () => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({type: 'logout'})
        },1500)
    }, [])
    

    if(state.validando) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">Validando...</div>
            </>
        )
    }


  return (
    <>
      <div className="alert alert-danger">No autenticado...</div>
      <div className="alert alert-success">Autenticado</div>
      <button className="btn btn-primary">Login</button>
      &nbsp;
      <button className="btn btn-danger">Login</button>
    </>
  );
};
