import React, { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";

const Productos = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    errorStatus: 0,
    errorMessage: "",
  });
  const [showAlert, setShowAlert] = useState({
    show: false,
    textAlert: "",
  });

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const getUsers = fetch("https://jsonplaceholder.typicode.com/users");
      getUsers
        .then((res) => res.json())
        .then((res) => setUsuarios(res))
        .catch((error) =>
          setError({
            errorStatus: 400,
            errorMessage: "pusiste mal el id",
          })
        )
        .finally(() => {
          setIsLoading(false);
        });
    }, 2000);
  }, []);

  let styleBtn = {
    padding: "10px 20px",
    border: "none",
    backgroundColor: "peru",
  };

  const crear = () => {
    let usuario = { name: "pepe", email: "pepe@gmail.com" };

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(usuario), // "{ name: "pepe", email: "pepe@gmail.com" }"
      // headers: { "autorization":"barear dsadsadsa das"}
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setShowAlert({
          show: true,
          textAlert: "Usuario creado con exito",
        });
      })
      .catch((error) => console.log(error));
  };

  const editar = () => {
    // hacer la peticion con el verbo PUT
    let newUser = { name: "juan", email: "juan@gmail.com" };
    let userId = 3;
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: "PUT",
      body: JSON.stringify(newUser),
    });
  };

  const eliminar = () => {
    // hacer la peticion con el verbo DELETE
    let userId = 5;

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: "DELETE",
    });
  };

  return (
    <div>
      <button style={styleBtn} onClick={crear}>
        Crear nuevo usuario
      </button>

      {isLoading ? (
        <PacmanLoader color="peru" size={30} />
      ) : (
        usuarios.map((usuario) => {
          return (
            <div
              key={usuario.id}
              style={{ border: "1px solid green", marginBottom: "10px" }}
            >
              <h2>{usuario.name}</h2>
              <h2>{usuario.email}</h2>
              <button
                style={{ ...styleBtn, marginRight: "12px" }}
                onClick={editar}
              >
                editar
              </button>
              <button style={styleBtn} onClick={eliminar}>
                eliminar
              </button>
            </div>
          );
        })
      )}

      {!isLoading && error.errorMessage && <h1>{error.errorMessage}</h1>}

      {showAlert.show && alert(showAlert.textAlert)}
    </div>
  );
};

export default Productos;
