import { useState } from "react";

export const Contador = () => {
  // contador --> setContador
  // nombre ---> setNombre --> setter
  // user --> setUser
  const [contador, setContador] = useState(0); // [ variable  ,  funcion]

  const sumar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h2>Estes es el contador</h2>
      <h3>{contador}</h3>
      <button onClick={sumar}>Sumar contador</button>
    </div>
  );
};
