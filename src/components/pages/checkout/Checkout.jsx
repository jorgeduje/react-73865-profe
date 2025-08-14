import { useState } from "react";

const Checkout = () => {
  // nombre, telefono , email
  const [user, setUser] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(user);
  };

  const handleChange = (evento) => {
    setUser({ ...user, [evento.target.name]: evento.target.value });
  };

  return (
    <div>
      <h1>Aca el formulario de compra</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="telefono"
          name="telefono"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <button>Comprar</button>
      </form>
    </div>
  );
};

export default Checkout;

// const [user, setUser] = useState({
//   nombreDeLaPersona: "pepe",
//   edad: 22,
// });
// //  setUser({...user})  // {  nombreDeLaPersona: "pepe",edad: 22,}
// setUser({ ...user, ["nombreDeLaPersona"]: "carmen" }); // {  edad: 22, nombreDela: "carmen"}

// user.nombreDeLaPersona
// user["nombreDeLaPersona"]
