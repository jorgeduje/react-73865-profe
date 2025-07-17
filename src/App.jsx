// import logoZapas from "./assets/images/logo.jpeg";

import { useState } from "react";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { Contador } from "./components/common/contador/Contador";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <Navbar />
      <ItemListContainer gretting="hola como estas? " />
      {/* <Contador name={name} /> */}
      <button onClick={() => setName("pepe")}>Cambiar nombre</button>
      {/* <img src={logoZapas} alt="" />

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ApDt-3Xy3gq8wdY2jEVxc3LcV5Gvun7QEA&s"
        alt=""
      />

      <img
        src="https://res.cloudinary.com/dnqfh2chg/image/upload/v1752709602/images_cjmqrk.jpg"
        alt=""
      /> */}
    </div>
  );
}

export default App;
