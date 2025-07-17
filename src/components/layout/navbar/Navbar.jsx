import { CartWidget } from "../../common/cartWidget/CartWidget";
import { CustomButton } from "../../common/customButton/CustomButton";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div>
      <h2 className="logo">Tienda Zapatillas</h2>
      <ul>
        <li>Todas</li>
        <li>Deportivas</li>
        <li>Urbanas</li>
      </ul>
      {/* BOTON */}
      <CustomButton
        texto={"pepe"}
        unaFuncion={() => {
          console.log("hola soy pepe");
        }}
      />
      <CartWidget />
    </div>
  );
};
