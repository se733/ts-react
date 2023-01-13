interface Persona {
  nombre: string;
  edad: number;
}

export const TiposBasicos = () => {
  const personasListas = () => {
    const persona: Persona = {
      nombre: "Seba",
      edad: 27,
    };
  };



  
  const sumar = ():number => {
    return 12+1
  }


  return (
    <>
      <h2>tipos basicos</h2>
      {sumar()}
    </>
  );
};
