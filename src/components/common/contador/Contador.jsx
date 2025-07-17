import { useEffect, useState } from "react";

export const Contador = ({ name }) => {
  // un componente se actualiza cuando cambia el padre
  //  las props o algun estado interno
  const [contador, setContador] = useState(0); // [ variable  ,  funcion]

  const sumar = () => {
    setContador(contador + 1);
  };

  // useEffect(() => {
  //   console.log(
  //     "Tarea pesada, asincrona como una peticion a un servidor en la india"
  //   );
  // }, []);

  useEffect(() => {
    console.log(
      "Tarea pesada, asincrona como una peticion a un servidor en la india"
    );
  }, [name]); // array de dependencias

  return (
    <div>
      <h2>Estes es el contador</h2>
      <h3>{contador}</h3>
      <button onClick={sumar}>Sumar contador</button>
    </div>
  );
};
