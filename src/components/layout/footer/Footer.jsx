import { CustomButton } from "../../common/customButton/CustomButton";
import "./Footer.css";
export const Footer = () => {
  return (
    <footer>
      <h2>Aca va el footer</h2>
      <CustomButton
        texto={"juan"}
        unaFuncion={() => {
          console.log("hola soy Juan");
        }}
      />
    </footer>
  );
};
