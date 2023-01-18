import React, { useState } from "react";
import { useCounter } from './hooks/useCounter';

export const Contador = () => {

const {valor, acumular} = useCounter(10)

  return (
    <>
      <h3>Contador con hook: {valor}</h3>

      <button 
      className="btn btn-primary"
      onClick={() => acumular(1)}
      >
            +1
      </button>
    &nbsp;
      <button 
      className="btn btn-primary"
      onClick={() => acumular(-1)}
      >
            -1
      </button>
    </>
  );
};
