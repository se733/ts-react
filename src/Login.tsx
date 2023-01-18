import React from 'react'

export const Login = () => {
  return (
    <>
    <h1>Login</h1>
    <div className='alert alert-info'>
        Validando...
    </div>

    <div className='alert alert-danger'>
        No autenticado...
    </div>

    <div className='alert alert-success'>
        Autenticado
    </div>

    <button className='btn btn-primary'>
        Login
    </button>
    &nbsp;
    <button className='btn btn-danger'>
        Login
    </button>
    </>
    )
}
