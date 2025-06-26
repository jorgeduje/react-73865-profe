import { useState } from "react";
import { Contador } from "./components/contador/Contador";
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";

function App() {
  // const [modoOscuro, setModoOscuro] = useState(true);

  // const cambiarModo = () => {
  //   setModoOscuro(!modoOscuro);
  // };

  return (
    <div>
      {/* <h2>{modoOscuro ? "Esta en modo oscuro" : "Esta en modo claro"}</h2>
      <button onClick={cambiarModo}>Cambiar modo</button>
      <Contador /> */}
      <Navbar />
      <ItemListContainer />
      <Footer />
    </div>
  );
}

export default App;
